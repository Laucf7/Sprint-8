import { render } from "@testing-library/react"
import WeeklyExpensesGraphic from "../components/WeeklyExpensesGraphic"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalWeekExpenses component", () => {
    render(<WeeklyExpensesGraphic />)
    expect(true).toBeTruthy()
})