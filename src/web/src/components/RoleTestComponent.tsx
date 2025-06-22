import { getCurrentUser, isAdmin, hasLevel } from '@/utils/auth';
import { RoleBasedAccess } from './RoleBasedAccess';

/**
 * Test component to verify role-based access control
 * This can be temporarily added to any page for testing
 */
export const RoleTestComponent = () => {
  const user = getCurrentUser();

  return (
    <div className="p-4 border rounded-lg bg-gray-50 m-4">
      <h3 className="font-bold mb-2">🧪 Role Test Component</h3>
      
      <div className="space-y-2 text-sm">
        <p><strong>Current User:</strong> {user?.username || 'Not logged in'}</p>
        <p><strong>User Level:</strong> {user?.level || 'N/A'}</p>
        <p><strong>Is Admin:</strong> {isAdmin() ? '✅ Yes' : '❌ No'}</p>
        <p><strong>Has User Level:</strong> {hasLevel('user') ? '✅ Yes' : '❌ No'}</p>
      </div>

      <div className="mt-4 space-y-2">
        <RoleBasedAccess requiredLevel="admin">
          <div className="p-2 bg-green-100 text-green-800 rounded">
            🔓 Admin-only content visible
          </div>
        </RoleBasedAccess>

        <RoleBasedAccess 
          requiredLevel="admin" 
          fallback={
            <div className="p-2 bg-red-100 text-red-800 rounded">
              🔒 Admin-only content hidden (you're not admin)
            </div>
          }
        >
          <div className="p-2 bg-green-100 text-green-800 rounded">
            🔓 This shouldn't show for non-admin users
          </div>
        </RoleBasedAccess>

        <RoleBasedAccess requiredLevels={['admin', 'user']}>
          <div className="p-2 bg-blue-100 text-blue-800 rounded">
            👥 Content for admin OR user levels
          </div>
        </RoleBasedAccess>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        💡 Remove this component in production
      </p>
    </div>
  );
};
