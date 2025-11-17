import { NextResponse } from 'next/server';

let users = [
  {
    userId: "1",
    user_id: "user_001",
    email: "admin@papayafresh.com",
    created_at: { seconds: 1672531200 }
  },
  {
    userId: "2",
    user_id: "user_002", 
    email: "customer@example.com",
    created_at: { seconds: 1672617600 }
  }
];

// DELETE /api/users/[id]
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    console.log('🗑️ DELETE user request:', id);
    
    const userIndex = users.findIndex(user => 
      user.userId === id || user.user_id === id
    );
    
    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    return NextResponse.json({
      success: true,
      message: 'User deleted successfully!',
      deletedUser: deletedUser,
      remainingCount: users.length
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}