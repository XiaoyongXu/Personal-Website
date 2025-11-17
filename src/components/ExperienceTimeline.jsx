

const ExperienceTimeline = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="p-4 border border-slate-700 rounded-lg bg-surface">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold">{it.role} — {it.company}</h4>
              {/* <div className="text-sm text-muted">{it.range}</div> */}
            </div>
          </div>
          <ul className="list-disc list-inside text-theme mt-2">
            {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline
