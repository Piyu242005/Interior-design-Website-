import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '1234567890';

  const handleSendMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <h3 className="font-medium">Chat with D NEST</h3>
            <p className="text-sm text-green-100">We typically reply within minutes</p>
          </div>
          <div className="p-4 space-y-3">
            <button
              onClick={() => handleSendMessage('Hello! I would like to inquire about your interior design services.')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
            >
              Inquire about services
            </button>
            <button
              onClick={() => handleSendMessage('I would like to schedule a consultation.')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
            >
              Schedule consultation
            </button>
            <button
              onClick={() => handleSendMessage('Can you provide a quote for my project?')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
            >
              Request a quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
