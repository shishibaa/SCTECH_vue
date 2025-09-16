export const api = {
  base: '/api',
  async get(path) {
    try {
      const r = await fetch(this.base + path)
      if (!r.ok) throw new Error('http')
      return await r.json()
    } catch (e) {
      return lsGet(path)
    }
  },
  async post(path, body) {
    try {
      const r = await fetch(this.base + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!r.ok) throw new Error('http')
      return await r.json()
    } catch (e) {
      return lsPost(path, body)
    }
  },
  async put(path, body) {
    try {
      const r = await fetch(this.base + path, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!r.ok) throw new Error('http')
      return await r.json()
    } catch (e) {
      return lsPut(path, body)
    }
  },
  async del(path) {
    try {
      const r = await fetch(this.base + path, { method: 'DELETE' })
      if (!r.ok) throw new Error('http')
      return await r.json()
    } catch (e) {
      return lsDel(path)
    }
  },
}

// ---- localStorage fallback (very simple CRUD by resource name) ----
function keyOf(path) { return 'adm:' + path }
function read(path) { return JSON.parse(localStorage.getItem(keyOf(path)) || '[]') }
function write(path, data) { localStorage.setItem(keyOf(path), JSON.stringify(data)); return data }
function parseResource(path) { // '/customers' -> 'customers'
  const m = path.match(/^\/(\w+)/)
  return m ? m[1] : ''
}
function lsGet(path) { return read(path) }
function lsPost(path, body) { const arr = read(path); body.id = cryptoRandomId(); arr.push(body); return write(path, arr).at(-1) }
function lsPut(path, body) { const arr = read(path); const i = arr.findIndex(x => String(x.id) === String(body.id)); if (i > -1) arr[i] = body; write(path, arr); return arr[i] }
function lsDel(path) { const arr = read('/' + parseResource(path)); const [, , id] = path.split('/'); const i = arr.findIndex(x => String(x.id) === String(id)); if (i > -1) arr.splice(i, 1); write('/' + parseResource(path), arr); return { ok: true } }
function cryptoRandomId() { return Math.random().toString(36).slice(2) + Date.now().toString(36) }
