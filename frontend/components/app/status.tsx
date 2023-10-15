import { EnvStatus } from '@/enum/envStatus';

export default function Status({ status }: { status: string }) {
  return (
    <div>
      {status === EnvStatus.InProgress && (
        <span className="inline-flex items-center bg-yellow-50 text-yellow-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-yellow-300 rounded-full"></span>
          {status}
        </span>
      )}
      {status === EnvStatus.Success && (
        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
          {status}
        </span>
      )}
    </div>
  );
}
