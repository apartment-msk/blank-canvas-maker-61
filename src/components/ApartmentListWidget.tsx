import { useEffect } from "react";

interface ApartmentListWidgetProps {
  className?: string;
}

declare global {
  interface Window {
    homereserve: {
      initWidgetSearch: (config: { token: string }) => void;
      initWidgetList: (config: { token: string }) => void;
    };
  }
}

export function ApartmentListWidget({ className }: ApartmentListWidgetProps) {
  useEffect(() => {
    // Load the widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://homereserve.ru/widget.js';
    document.head.appendChild(script);

    // Initialize widget when script loads
    script.onload = () => {
      if (window.homereserve && window.homereserve.initWidgetList) {
        window.homereserve.initWidgetList({ token: "HYkUIAGFQD" });
      }
    };

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://homereserve.ru/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={className}>
      <div id="hr-widget" className="w-full"></div>
    </div>
  );
}