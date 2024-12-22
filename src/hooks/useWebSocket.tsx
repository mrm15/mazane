// src/hooks/useWebSocket.tsx
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type UseWebSocketReturn<T> = {
  myData: T[];
  socket: WebSocket | null;
};

function useWebSocket<T = unknown>(): UseWebSocketReturn<T> {
  const [myData, setMyData] = useState<T[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const tokenValue = Cookies.get('jwttoken');
    if (!tokenValue) {
      console.error('No token found');
      return;
    }

    const token = `Bearer ${tokenValue}`;

    const socket1111 = process.env.REACT_APP_SOCKET_URL || "wss://hoshro.com/ws/"
    const socketUrl = `${socket1111}get_prices/?token=${token}`;

    // Initialize WebSocket
    const newSocket = new WebSocket(socketUrl);

    newSocket.onopen = () => {
      console.log('WebSocket connection established');
      // Optionally send initial message or token confirmation:
      // newSocket.send(JSON.stringify({ token }));
    };

    newSocket.onmessage = (event) => {
      try {
        const data: T[] | T = JSON.parse(event.data);
        // Adjust the type assertion based on the actual shape of data
        // If data is an array, use setMyData(data)
        // If data is a single object that you want to store in an array, do setMyData([data])
        // Here we assume it's an array:
        setMyData(Array.isArray(data) ? data : [data]);
        console.log(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    newSocket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      if (newSocket.readyState === WebSocket.OPEN) {
        newSocket.close();
      }
    };
  }, []); // Dependency on url if needed

  return { myData, socket }
}

export default useWebSocket;
