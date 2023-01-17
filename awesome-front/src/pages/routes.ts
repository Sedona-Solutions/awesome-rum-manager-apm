import Home from "./Home.svelte";
import RhumDetail from "../routes/rhums/[id]/+page.svelte";
import RhumCreate from "../routes/rhums/create/+page.svelte";
import RhumList from "../routes/rhums/(list)/+page.svelte";

export const routes = {
    '/': Home,
    '/home': Home,
    '/rhums': RhumList,
    '/rhums/create': RhumCreate,
    '/rhums/:id': RhumDetail,
}
