export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-headline-md text-primary mb-6">Analytics Management</h1>
      <div className="bg-surface-container p-8 border border-outline-variant ambient-glow">
        <p className="text-on-surface-variant font-body-md">
          This is the admin panel for managing analytics. 
          Connect this interface to the backend API at /api/admin/analytics.
        </p>
      </div>
    </div>
  );
}
