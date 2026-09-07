import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

interface FoodScannerProps {
  onScanResult: (food: any) => void;
}

const FoodScanner = ({ onScanResult }: FoodScannerProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [scanning, setScanning] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) return;

    setScanning(true);
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: imageSrc }),
      });
      const data = await response.json();
      onScanResult(data);
    } catch (error) {
      alert("Failed to scan. Is your API key set?");
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-2xl w-full" />
      <button
        onClick={capture}
        disabled={scanning}
        className="w-full p-4 bg-teal-500 rounded-xl font-bold text-[#0f0f0f]"
      >
        {scanning ? 'Analyzing...' : '🥗 Scan Food'}
      </button>
    </div>
  );
};

export default FoodScanner;
