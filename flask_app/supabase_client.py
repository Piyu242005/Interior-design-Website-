"""
Supabase client for D NEST Flask Application
Handles database interactions for portfolio, testimonials, and contact submissions
"""

import os
from typing import Optional, List, Dict, Any

# Try to import supabase, fall back to mock if not available
try:
    from supabase import create_client, Client
    SUPABASE_AVAILABLE = True
except ImportError:
    SUPABASE_AVAILABLE = False

# Environment variables for Supabase
SUPABASE_URL = os.environ.get('SUPABASE_URL', '')
SUPABASE_ANON_KEY = os.environ.get('SUPABASE_ANON_KEY', '')


class MockSupabaseClient:
    """Mock client that returns empty data when Supabase is not configured"""
    
    def __init__(self):
        pass
    
    def table(self, name: str):
        return MockTable()


class MockTable:
    """Mock table for Supabase operations"""
    
    def select(self, *args, **kwargs):
        return self
    
    def insert(self, data: dict):
        return MockResponse(data=data)
    
    def eq(self, column: str, value: Any):
        return self
    
    def order(self, column: str, desc: bool = False):
        return self
    
    def limit(self, count: int):
        return self
    
    def execute(self):
        return MockResponse(data=[])


class MockResponse:
    """Mock response object"""
    
    def __init__(self, data=None, error=None):
        self.data = data if data is not None else []
        self.error = error


def get_supabase_client():
    """Get Supabase client or mock if not configured"""
    if SUPABASE_AVAILABLE and SUPABASE_URL and SUPABASE_ANON_KEY:
        return create_client(SUPABASE_URL, SUPABASE_ANON_KEY)
    return MockSupabaseClient()


# Initialize client
supabase = get_supabase_client()


def get_portfolio_items(category: Optional[str] = None, limit: int = 50) -> List[Dict[str, Any]]:
    """
    Fetch portfolio items from Supabase
    
    Args:
        category: Filter by category (optional)
        limit: Maximum number of items to return
    
    Returns:
        List of portfolio items
    """
    try:
        query = supabase.table('portfolio_items').select('*')
        
        if category and category != 'all':
            query = query.eq('category', category)
        
        query = query.order('created_at', desc=True).limit(limit)
        response = query.execute()
        
        return response.data if response.data else []
    except Exception as e:
        print(f"Error fetching portfolio items: {e}")
        return []


def get_featured_items(limit: int = 6) -> List[Dict[str, Any]]:
    """
    Fetch featured portfolio items
    
    Args:
        limit: Maximum number of items to return
    
    Returns:
        List of featured portfolio items
    """
    try:
        response = (supabase.table('portfolio_items')
                    .select('*')
                    .eq('featured', True)
                    .limit(limit)
                    .execute())
        
        return response.data if response.data else []
    except Exception as e:
        print(f"Error fetching featured items: {e}")
        return []


def get_testimonials(featured_only: bool = True, limit: int = 10) -> List[Dict[str, Any]]:
    """
    Fetch testimonials from Supabase
    
    Args:
        featured_only: Only return featured testimonials
        limit: Maximum number of items to return
    
    Returns:
        List of testimonials
    """
    try:
        query = supabase.table('testimonials').select('*')
        
        if featured_only:
            query = query.eq('featured', True)
        
        response = query.limit(limit).execute()
        
        return response.data if response.data else []
    except Exception as e:
        print(f"Error fetching testimonials: {e}")
        return []


def submit_contact(name: str, email: str, phone: str, message: str) -> bool:
    """
    Submit a contact form entry to Supabase
    
    Args:
        name: Contact name
        email: Contact email
        phone: Contact phone (optional)
        message: Contact message
    
    Returns:
        True if successful, False otherwise
    """
    try:
        data = {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        }
        
        response = supabase.table('contact_submissions').insert(data).execute()
        
        return response.data is not None
    except Exception as e:
        print(f"Error submitting contact: {e}")
        return False
