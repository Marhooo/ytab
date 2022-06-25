import { defineStore } from 'pinia'
import { searchEngineTy } from '~/searchEngine'

export const useSearchEngineStore = defineStore('searchEngine', {
  state: () => {
    return {
      currentSearchEngine: JSON.parse(localStorage.getItem('CURRENTSEARCH-ENGINE')!),
    }
  },
  getters: {
    getAllSearchEngines: () => JSON.parse(localStorage.getItem('SEARCH-ENGINE')!),
    getCurrentSearchEngine: state => state.currentSearchEngine
  },
  actions: {
    SET_CURRENTSEARCH_ENGINE(searchEngineObj: searchEngineTy) :void {
      this.$patch((state) => {
        state.currentSearchEngine = searchEngineObj
        localStorage.setItem('CURRENTSEARCH-ENGINE', JSON.stringify(searchEngineObj))
      })
    }
  }
})
