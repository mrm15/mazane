import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate.tsx";

const ShowClientsSection = ({ setSelectedClient, selectedClient }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const myAxios = useAxiosPrivate()
  const fetchUsers = async () => {
    const result = await myAxios.post("/orders/GetClientRequests/",{});
    return result.data || [];
  };

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    enabled: true,
    retry: 3,
    staleTime: 60 * 60 * 24,
    // cacheTime: 300000,
    // refetchOnWindowFocus: false,
  });

  // Sort clients by requests in descending order
  const sortedClients = data?.detail?.slice().sort((a, b) => b.requests - a.requests) || [];

  return (
    <div
      className="p-2 rounded border my-1 border-gray-500"
      style={{
        backgroundColor: "#333"
      }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center text-white">
        <div>
          لیست مشتریان
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          {isOpen ? (
              <>isOpen</>
            // <ChevronUpIcon className="w-5 h-5 inline text-white" />
          ) : (
              <>isNotOpen</>
            // <ChevronDownIcon className="w-5 h-5 inline text-white" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'
        }`}
      >

        <div className="flex gap-2 flex-col  mt-2 w-full text-right">
          <button
            className={`rounded p-2 text-white  w-fit  whitespace-nowrap ${selectedClient?.client_id === -1 ? " font-bold " : "  "}`}
            onClick={() => setSelectedClient({client_id: -1})}
          >
            همه
          </button>
          {sortedClients.map((row) => {
            const bgColor = selectedClient?.client_id === row?.client_id ? " font-bold " : " ";
            return (<button
                className={`rounded text-white w-fit ${bgColor}`}
                key={row?.client_id}
                onClick={() => setSelectedClient(row)}
              >
                {row.client_name} ({row.requests})
              </button>);
          })}
        </div>
      </div>
    </div>);
};

export default ShowClientsSection;
