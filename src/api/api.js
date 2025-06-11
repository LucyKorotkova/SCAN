const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

export async function loginUser(login, password) {
  const res = await fetch(`${BASE_URL}/account/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ login, password })
  });
  if (!res.ok) throw new Error('Ошибка авторизации');
  return res.json();
}

export async function getAccountInfo(token) {
  const res = await fetch(`${BASE_URL}/account/info`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Ошибка получения информации');
  return res.json();
}

export async function fetchHistograms(body) {
  const token = localStorage.getItem('accessToken');
  const res = await fetch(`${BASE_URL}/objectsearch/histograms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error('Ошибка получения сводки');
  return res.json();
}

export async function fetchPublicationIds(body) {
  const token = localStorage.getItem('accessToken');
  const res = await fetch(`${BASE_URL}/objectsearch`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error('Ошибка поиска публикаций');
  return res.json();
}

export async function fetchDocuments(ids) {
  const token = localStorage.getItem('accessToken');
  const res = await fetch(`${BASE_URL}/documents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ ids })
  });
  if (!res.ok) throw new Error('Ошибка получения публикаций');
  return res.json();
}
