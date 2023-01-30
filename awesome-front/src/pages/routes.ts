import Home from "./Home.svelte";
import RumDetail from "../routes/rums/[id]/+page.svelte";
import RumCreate from "../routes/rums/create/+page.svelte";
import RumList from "../routes/rums/(list)/+page.svelte";

export const routes = {
    '/': Home,
    '/home': Home,
    '/rums': RumList,
    '/rums/create': RumCreate,
    '/rums/:id': RumDetail,
}
