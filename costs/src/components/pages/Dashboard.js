import { useMemo } from 'react'
import styles from './Dashboard.module.css'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Dashboard({ projects }) { 
  const budgetByCategory = useMemo(() => {
    const categoryData = {}
    projects.forEach(p => {
      const categoryName = p.category?.name || 'Sem Categoria'
      const budget = parseFloat(p.budget)
      if (!categoryData[categoryName]) {
        categoryData[categoryName] = 0
      }
      categoryData[categoryName] += budget
    });
    return Object.keys(categoryData).map(key => ({ name: key, value: categoryData[key] }))
  }, [projects])

  const budgetVsCost = useMemo(() => {
    return projects.map(p => ({
      name: p.name,
      Orçamento: parseFloat(p.budget),
      Custo: parseFloat(p.cost),
    }));
  }, [projects])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF']

  return (
    <section className={styles.dashboard_container}>
      <h1>Dashboard de Projetos</h1>
      <p>Acompanhe o status dos seus projetos de forma visual.</p>

      {projects.length > 0 ? (
        <div className={styles.charts_container}>
          <div className={styles.chart}>
            <h2>Orçamento por Categoria</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={budgetByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {budgetByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.chart}>
            <h2>Orçamento vs. Custo por Projeto</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetVsCost} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `€${value / 1000}k`} />
                <Tooltip formatter={(value) => new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(value)} />
                <Legend />
                <Bar dataKey="Orçamento" fill="#8884d8" />
                <Bar dataKey="Custo" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p>Ainda não há projetos para exibir no dashboard. Crie seu primeiro projeto!</p>
      )}
    </section>
  )
}

export default Dashboard