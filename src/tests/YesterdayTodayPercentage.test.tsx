import { render } from "@testing-library/react"
import YesterdayTodayPercentage from "../components/YesterdayTodayPercentage"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalWeekExpenses component", () => {
    render(<YesterdayTodayPercentage />)
    expect(true).toBeTruthy()
})