export const state = {
  expanded: false
}

export const mutations = {
  expand (state, toggle) {
    if (toggle) {
      state.expanded = toggle
    } else {
      state.expanded = !state.expanded
    }
  }
}
