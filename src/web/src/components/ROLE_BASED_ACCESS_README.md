# Role-Based Access Control (RBAC)

## Overview

The Role-Based Access Control system restricts access to certain features based on user roles/levels. Currently, the CSV Export feature is only available to users with "admin" level.

## User Levels

Based on the database schema and API implementation:

- **admin**: Full access to all features including CSV export
- **user**: Standard user access (default level)
- **other levels**: Can be added as needed

## Implementation

### Components

1. **AdminCSVExportButton** - CSV export button that only shows for admin users
2. **RoleBasedAccess** - Generic wrapper for role-based content
3. **Enhanced auth utilities** - Functions to check user roles

### Files Added/Modified

```
src/web/src/
├── components/
│   ├── AdminCSVExportButton.tsx     # Admin-only CSV export
│   ├── RoleBasedAccess.tsx          # Generic role wrapper
│   └── Sidebar.tsx                  # Shows user level
├── utils/
│   └── auth.ts                      # Enhanced with role functions
└── pages/
    ├── dumpsters/table/dataTable.tsx    # Uses AdminCSVExportButton
    ├── rent/table/dataTable.tsx         # Uses AdminCSVExportButton
    ├── operations/table/dataTable.tsx   # Uses AdminCSVExportButton
    └── residues/table/dataTable.tsx     # Uses AdminCSVExportButton
```

## Usage Examples

### Admin-Only CSV Export

```tsx
import { AdminCSVExportButton } from '@/components/AdminCSVExportButton';

// Only shows for admin users
<AdminCSVExportButton
  data={tableData}
  columns={tableColumns}
  filename="admin-export"
/>
```

### Generic Role-Based Access

```tsx
import { RoleBasedAccess } from '@/components/RoleBasedAccess';

// Single role requirement
<RoleBasedAccess requiredLevel="admin">
  <AdminOnlyContent />
</RoleBasedAccess>

// Multiple roles allowed
<RoleBasedAccess requiredLevels={['admin', 'manager']}>
  <ManagerOrAdminContent />
</RoleBasedAccess>

// With fallback content
<RoleBasedAccess 
  requiredLevel="admin" 
  fallback={<div>Access Denied</div>}
>
  <AdminContent />
</RoleBasedAccess>
```

### Auth Utility Functions

```tsx
import { isAdmin, hasLevel, hasAnyLevel, getCurrentUser } from '@/utils/auth';

// Check if current user is admin
if (isAdmin()) {
  // Show admin features
}

// Check specific level
if (hasLevel('manager')) {
  // Show manager features
}

// Check multiple levels
if (hasAnyLevel(['admin', 'manager'])) {
  // Show content for admin or manager
}

// Get full user object
const user = getCurrentUser();
console.log(user?.level); // 'admin', 'user', etc.
```

## User Interface Changes

### Sidebar Enhancement

The sidebar now shows:
- Username
- User level (for admin users)
- Visual indication of admin status

### CSV Export Buttons

- **Admin users**: See "Exportar CSV" button in all DataTables
- **Regular users**: CSV export button is hidden
- **No visual indication**: Button simply doesn't appear for non-admin users

## API Integration

### Login Response

The API login endpoint returns user data including level:

```json
{
  "id": 1,
  "username": "admin",
  "level": "admin",
  "status": true
}
```

### Admin User

There's a hardcoded admin user in the API:
- **Username**: `admin`
- **Level**: `admin`
- **Access**: Full system access including CSV export

## Security Considerations

### Client-Side Only

⚠️ **Important**: This is client-side role checking only. For production:

1. **API Security**: Implement server-side role validation
2. **Route Protection**: Add API endpoint access control
3. **Data Filtering**: Filter sensitive data based on user roles

### Current Implementation

- ✅ **UI/UX**: Hides features from non-admin users
- ✅ **User Experience**: Clean interface without access denied messages
- ⚠️ **Security**: Client-side only (can be bypassed by tech-savvy users)

## Testing

### Test Users

1. **Admin User**:
   - Username: `admin`
   - Can see CSV export buttons
   - Shows "Admin" label in sidebar

2. **Regular User**:
   - Any other username
   - Cannot see CSV export buttons
   - No special labels in sidebar

### Test Scenarios

1. **Login as admin** → CSV export buttons visible
2. **Login as regular user** → CSV export buttons hidden
3. **Switch users** → UI updates accordingly
4. **Logout/Login** → Permissions reset correctly

## Future Enhancements

- [ ] **Server-side validation**: API role checking
- [ ] **More granular permissions**: Feature-specific roles
- [ ] **Role management UI**: Admin interface for user roles
- [ ] **Audit logging**: Track admin actions
- [ ] **Session management**: Role-based session timeouts

## Troubleshooting

### CSV Button Not Showing for Admin

1. Check localStorage user data has `level: "admin"`
2. Verify login API returns correct user level
3. Clear browser cache and re-login

### Button Showing for Non-Admin

1. Check if user data in localStorage is corrupted
2. Verify `isAdmin()` function logic
3. Clear localStorage and re-login
