import { createPinia } from 'pinia'
import persist from "pinia-plugin-persistedstate"
export * from './user' //导出

export default createPinia().use(persist)