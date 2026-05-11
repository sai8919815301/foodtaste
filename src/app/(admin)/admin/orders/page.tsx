export default function OrdersPage() {
  return (
    <div className="p-8">
      <h1 className="text-headline-md text-primary mb-6">Orders Management</h1>
      <div className="bg-surface-container p-8 border border-outline-variant ambient-glow">
        <p className="text-on-surface-variant font-body-md">
          This is the admin panel for managing orders. 
          Connect this interface to the backend API at /api/admin/orders.
        </p>
      </div>
    </div>
  );
}
