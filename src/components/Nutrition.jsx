export const Nutrition = () => {
  return (
    <section>
      <div className="space-y-5">
        <h2 className="text-4xl text-Brown800 font-young">Nutrition</h2>
        <p className="font-outfit text-lg text-stone600">The table below shows nutritional values per serving without the additional fillings</p>
        <div>
            <table className="w-full text-paragraph">
                <tbody>
                    <tr>
                        <td className="py-4">Calories</td>
                        <td className="text-table">277kcal</td>
                    </tr>
                    <tr className="border-table">
                        <td className="py-4">Carbs</td>
                        <td className="text-table">0g</td>
                    </tr>
                    <tr className="border-table">
                        <td className="py-4">Protein</td>
                        <td className="text-table">20g</td>
                    </tr>
                    <tr className="border-table">
                        <td className="py-4">Fat</td>
                        <td className="text-table">22g</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  )
}

