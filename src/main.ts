import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div>
    <div class="card">
      <div class="text-content">
        <div class="name">Maryna</div>
        <div class="question">Would you be my Valentine?</div>
      </div>
      <div class="button-group">
        <button id="yes-btn" type="button">Yes</button>
        <button type="button" disabled>No</button>
      </div>
    </div>
  </div>
`

document.querySelector<HTMLButtonElement>('#yes-btn')?.addEventListener('click', () => {
    app.innerHTML = `
      <div class="card">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGcxdWF5cnNocnd5NTBvazc1NDk4YmZqbHVlN2N1M2FxdjZjODRvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HJibfnd7xqk5hAMD4v/giphy.gif" alt="Success" style="max-width: 100%; height: auto;" />
      </div>
    `
})
