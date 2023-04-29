export function getToken() {const token = localStorage.getItem('access_token') 

    return localStorage.getItem('access_token') || sessionStorage.getItem('token');
  }
  
  export function requireAuth(route) {
    const token = getToken();
  
    if (!token) {
      return { redirect: '/login' };
    }
  
    const headers = { Authorization: `Bearer ${token}` };
    return fetch('/api/verify-token', { headers })
      .then(res => {
        if (res.status === 200) {
          return { component: route.component };
        } else {
          return { redirect: '/login' };
        }
      })
      .catch(err => {
        console.error(err);
        return { redirect: '/login' };
      });
  }
  