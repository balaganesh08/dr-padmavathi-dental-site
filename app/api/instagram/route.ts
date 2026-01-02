import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Instagram Graph API endpoint
    // You'll need to set up Instagram Business Account and get an access token
    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
      // Return fallback URLs if API is not configured
      return NextResponse.json({
        posts: [
          'https://www.instagram.com/p/DSzY9NukRUz/',
          'https://www.instagram.com/p/DSfNu2Cj9gm/',
          'https://www.instagram.com/p/DSaW5ppj7St/',
          'https://www.instagram.com/p/DSNEg_tj_kD/',
          'https://www.instagram.com/p/DSFJTc3ARLs/',
          'https://www.instagram.com/p/DR7LTVPD3Fl/',
        ],
        message: 'Using fallback URLs. Configure Instagram API for auto-fetch.',
      });
    }

    // Fetch recent media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,caption&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();
    
    // Extract permalinks (post URLs) from the response
    const posts = data.data
      .filter((item: any) => item.permalink) // Only include items with permalinks
      .map((item: any) => item.permalink)
      .slice(0, 12); // Limit to 12 most recent posts

    return NextResponse.json({ posts, fetched: true });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return fallback URLs on error
    return NextResponse.json({
      posts: [
        'https://www.instagram.com/p/DSzY9NukRUz/',
        'https://www.instagram.com/p/DSfNu2Cj9gm/',
        'https://www.instagram.com/p/DSaW5ppj7St/',
        'https://www.instagram.com/p/DSNEg_tj_kD/',
        'https://www.instagram.com/p/DSFJTc3ARLs/',
        'https://www.instagram.com/p/DR7LTVPD3Fl/',
      ],
      error: 'Using fallback URLs',
    });
  }
}

