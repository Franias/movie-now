import {render, screen } from "@testing-library/react"
import {QueryClientProvider,QueryClient } from "react-query"
import {Header} from "..//Header/index"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"
describe('Header ', () => { 
    it("should render correctly", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
            </QueryClientProvider>
            );

        expect(screen.getByText("Sign Out")).toBeInTheDocument();
    })
})