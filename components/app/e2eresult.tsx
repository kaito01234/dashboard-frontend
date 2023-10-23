export enum E2EResultStatus {
  UnTested = 'UnTested',
  Success = 'Success',
  Failure = 'Failure',
}

export default function E2EResult({ status }: { status: string }) {
  return (
    <div>
      {status === E2EResultStatus.UnTested && (
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
          {status}
        </span>
      )}
      {status === E2EResultStatus.Success && (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
          {status}
        </span>
      )}
      {status === E2EResultStatus.Failure && (
        <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">
          {status}
        </span>
      )}
    </div>
  );
}
