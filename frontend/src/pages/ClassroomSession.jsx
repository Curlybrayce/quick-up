import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Monitor, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Share2, 
  StopCircle, 
  Palette, 
  Eraser, 
  Trash2 
} from 'lucide-react';

const ClassroomSession = () => {
  // Stream and connection states
  const [localStream, setLocalStream] = useState(null);
  const [screenStream, setScreenStream] = useState(null);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  // Drawing board states
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState('#000000');
  const [drawingTool, setDrawingTool] = useState('pen');

  // Refs for video and canvas
  const localVideoRef = useRef(null);
  const screenShareRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // Initialize drawing canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.6;
    
    // Configure drawing context
    context.lineCap = 'round';
    context.strokeStyle = drawColor;
    context.lineWidth = 5;
    
    contextRef.current = context;
  }, []);

  // Start camera and microphone
  const startMediaDevices = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      localVideoRef.current.srcObject = stream;
      setLocalStream(stream);
      setIsMicOn(true);
      setIsCameraOn(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  // Screen sharing functionality
  const startScreenShare = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      });
      
      screenShareRef.current.srcObject = screenStream;
      setScreenStream(screenStream);
      setIsScreenSharing(true);

      screenStream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  // Stop screen sharing
  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
      setIsScreenSharing(false);
    }
  };

  // Drawing board interactions
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">
          Tech Tutorial Classroom
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Local Camera View */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Your Camera
            </h2>
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              className="w-full rounded-lg"
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button 
                onClick={() => {
                  const track = localStream.getAudioTracks()[0];
                  track.enabled = !isMicOn;
                  setIsMicOn(!isMicOn);
                }}
                className={`p-2 rounded-full ${isMicOn ? 'bg-green-500' : 'bg-red-500'} text-white`}
              >
                {isMicOn ? <Mic /> : <MicOff />}
              </button>
              <button 
                onClick={() => {
                  const track = localStream.getVideoTracks()[0];
                  track.enabled = !isCameraOn;
                  setIsCameraOn(!isCameraOn);
                }}
                className={`p-2 rounded-full ${isCameraOn ? 'bg-green-500' : 'bg-red-500'} text-white`}
              >
                {isCameraOn ? <Video /> : <VideoOff />}
              </button>
            </div>
          </div>

          {/* Screen Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Screen Share
            </h2>
            {isScreenSharing ? (
              <video 
                ref={screenShareRef} 
                autoPlay 
                className="w-full rounded-lg"
              />
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">No screen shared</p>
              </div>
            )}
            <div className="flex justify-center mt-4">
              {!isScreenSharing ? (
                <button 
                  onClick={startScreenShare}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <Share2 className="mr-2" /> Start Sharing
                </button>
              ) : (
                <button 
                  onClick={stopScreenShare}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <StopCircle className="mr-2" /> Stop Sharing
                </button>
              )}
            </div>
          </div>

          {/* Whiteboard */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Whiteboard
            </h2>
            <canvas 
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              className="bg-white border rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setDrawColor('#000000')}
                  className="w-8 h-8 bg-black rounded-full"
                />
                <button 
                  onClick={() => setDrawColor('#FF0000')}
                  className="w-8 h-8 bg-red-500 rounded-full"
                />
                <button 
                  onClick={() => setDrawColor('#0000FF')}
                  className="w-8 h-8 bg-blue-500 rounded-full"
                />
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setDrawingTool('pen')}
                  className="bg-gray-200 p-2 rounded"
                >
                  <Palette />
                </button>
                <button 
                  onClick={() => setDrawingTool('eraser')}
                  className="bg-gray-200 p-2 rounded"
                >
                  <Eraser />
                </button>
                <button 
                  onClick={clearCanvas}
                  className="bg-red-200 p-2 rounded"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Media Device Controls */}
        <div className="text-center mt-8">
          <button 
            onClick={startMediaDevices}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Start Classroom Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassroomSession;