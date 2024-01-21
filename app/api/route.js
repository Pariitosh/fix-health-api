export async function GET() {
    
    const data = {
        Noida: ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'],
        Gurgaon: ['Dr. Brown', 'Dr. Davis', 'Dr. Miller'],
        Chennai: ['Dr. Wilson', 'Dr. Moore', 'Dr. Taylor'],
        Delhi: ['Dr. Anderson', 'Dr. Thomas', 'Dr. Jackson'],
        Bangalore: ['Dr. White', 'Dr. Harris', 'Dr. Martin'],
        Hyderabad: ['Dr. Garcia', 'Dr. Martinez', 'Dr. Robinson'],
        Pune: ['Dr. Lee', 'Dr. Walker', 'Dr. Hall'],
        Ghaziabad: ['Dr. Allen', 'Dr. Young', 'Dr. Hernandez'],
        Faridabad: ['Dr. King', 'Dr. Wright', 'Dr. Hill'],
        Lucknow: ['Dr. Scott', 'Dr. Green', 'Dr. Adams'],
         }
    return Response.json({ data })
  }