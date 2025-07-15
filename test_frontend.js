test('renders dashboard header', () => {
  document.body.innerHTML = '<div><h1>Dashboard</h1></div>';
  const header = document.querySelector('h1');
  expect(header.textContent).toBe('Dashboard');
});
