import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Link2, 
  Copy, 
  CheckCircle 
} from 'lucide-react';

const ClassroomAccess = () => {
  const [sessionId, setSessionId] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate unique session ID
  const generateSessionId = () => {
    const randomId = Math.random().toString(36).substring(2, 10);
    const timestamp = Date.now().toString(36);
    const uniqueSessionId = `${timestamp}-${randomId}`;
    
    setSessionId(uniqueSessionId);
    setInviteLink(`${window.location.origin}/join/${uniqueSessionId}`);

    createSession(uniqueSessionId);
  };

  // Copy invite link to clipboard
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create a session
const createSession = async (sessionId) => {
  try {
      const response = await fetch('http://localhost:3000/create-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
          console.log(result.message);
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('Error creating session:', error);
  }
};



// Join a session
const joinSession = async (sessionId, user) => {
  try {
      const response = await fetch('http://localhost:3000/join-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, user }),
      });
      console.log(response)
      const result = await response.json();
      console.log(result)
      if (response.ok) {
          console.log(result.message);
      } else {
          console.error(result.message);
      }
  } catch (error) {
      console.error('Error joining session:', error);
  }
};

const username = "Virus";
const handleJoin = async () => {
  await joinSession(sessionId, { username });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Classroom Access
        </h2>

        {/* Instructor Controls */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">
            Create Classroom Session
          </h3>
          <button 
            onClick={generateSessionId}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg 
            hover:bg-indigo-700 transition transform hover:scale-105 
            flex items-center justify-center"
          >
            <Users className="mr-2" /> Generate Session
          </button>
        </div>

        {/* Session Details */}
        {sessionId && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-blue-800">Session ID:</h4>
              <span className="text-blue-600 font-mono">{sessionId}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={inviteLink} 
                readOnly 
                className="flex-grow p-2 border rounded bg-white"
              />
              <button 
                onClick={copyInviteLink}
                className="bg-green-500 text-white p-2 rounded"
              >
                {copied ? <CheckCircle /> : <Copy />}
              </button>
            </div>
          </div>
        )}

        {/* Student Access */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">
            Join a Classroom
          </h3>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Enter Session ID" 
              className="flex-grow p-3 border-2 border-indigo-200 rounded-lg"
            />

<button onClick={handleJoin}>Join</button>
            {/* <Link 
              to="/classroom/session" 
              className="bg-green-600 text-white px-4 py-3 rounded-lg 
              hover:bg-green-700 flex items-center"
            >
              <Link2 onClick={(e) =>{e.preventDefault(); handleJoin; alert('link clicked')}}/>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomAccess;