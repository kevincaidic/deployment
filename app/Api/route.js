import { NextResponse } from 'next/server';

export async function GET() {
  // Sample data - replace with your actual data source
  const stats = {
    totalUsers: 6,
    newUsers: 2,
    totalScans: 12, 
    papayasOnShelf: 12,
    lastUpdated: new Date().toISOString()
  };
  
  return NextResponse.json(stats);
}
