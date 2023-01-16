import Home from "./Home.svelte";
import RhumDetail from "./rhum/RhumDetail.svelte";
import RhumCreate from "./rhum/RhumCreate.svelte";
import RhumList from "./rhum/RhumList.svelte";

export const routes = {
    '/': Home,
    '/home': Home,
    '/rhums': RhumList,
    '/rhums/create': RhumCreate,
    '/rhums/:id': RhumDetail,
}
