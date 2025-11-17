import { NextResponse } from 'next/server';

// Sample data - replace with your actual database
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

// GET /api/users
export async function GET() {
  console.log('📥 GET /api/users request');
  
  return NextResponse.json({ 
    success: true, 
    users: users,
    count: users.length,
    message: "Online API is working! 🚀"
  });
}

// POST /api/users
export async function POST(request) {
  try {
    const { email } = await request.json();
    
    const newUser = {
      userId: Date.now().toString(),
      user_id: `user_${Date.now()}`,
      email: email,
      created_at: { seconds: Math.floor(Date.now() / 1000) }
    };
    
    users.push(newUser);
    
    return NextResponse.json({ 
      success: true, 
      user: newUser,
      message: "User created successfully"
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create user" }, 
      { status: 500 }
    );
  }
}