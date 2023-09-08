1. Get data in different classes
2. Search UI

Key Features
1. use url to record the search status -> need bidirectional sync
    - only allow url to change the page states, not the reverse
    - when url has `search=xxx`, then need to fill search panel with `xxx`, even when change tabs
    - need to listen to url changes to update the page states
2. 