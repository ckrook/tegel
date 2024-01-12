//FIXME: Should we do something like this?
export {};
declare global {
  interface HTMLElementEventMap {
    tdsToggle: CustomEvent;
    tdsChange: CustomEvent;
    tdsClose: CustomEvent;
    tdsClick: CustomEvent;
    tdsInput: CustomEvent;
    tdsPageChange: CustomEvent;
    tdsSortChange: CustomEvent;
    tdsSelect: CustomEvent;
    tdsSelectAll: CustomEvent;
  }
}
