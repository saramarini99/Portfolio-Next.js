interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function BaseModal({
  isOpen,
  onClose,
  children,
  className,
}: Props) {
  if (!isOpen) return;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`border border-amber-400/30 bg-amber-400/5 rounded-2xl p-10 text-center ${
          className ?? ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
