export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-black rounded-xl p-6 max-w-[90%] max-h-[90vh] overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-xl font-bold"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
