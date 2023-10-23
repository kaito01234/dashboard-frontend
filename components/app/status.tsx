export enum EnvStatus {
  Starting = 'Starting',
  Creating = 'Creating',
  Running = 'Running',
  Failure = 'Failure',
  Rebooting = 'Rebooting',
  Deleting = 'Deleting',
}

export default function Status({ status }: { status: string }) {
  return (
    <div>
      {status === EnvStatus.Starting && (
        <span className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-gray-400 rounded-full"></span>
          Starting
        </span>
      )}
      {status === EnvStatus.Creating && (
        <span className="inline-flex items-center bg-yellow-50 text-yellow-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-yellow-300 rounded-full"></span>
          Creating
        </span>
      )}
      {status === EnvStatus.Running && (
        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
          Running
        </span>
      )}
      {status === EnvStatus.Failure && (
        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
          Failure
        </span>
      )}
      {status === EnvStatus.Rebooting && (
        <span className="inline-flex items-center bg-yellow-50 text-yellow-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-yellow-300 rounded-full"></span>
          Rebooting
        </span>
      )}
      {status === EnvStatus.Deleting && (
        <span className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 mr-1 bg-gray-400 rounded-full"></span>
          Deleting
        </span>
      )}
    </div>
  );
}
