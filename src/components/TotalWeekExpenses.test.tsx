import { render } from "@testing-library/react"
import TotalWeekExpenses from "./TotalWeekExpenses"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalWeekExpenses component", () => {
    render(<TotalWeekExpenses />)
    expect(true).toBeTruthy()
})