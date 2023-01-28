const changes = document.querySelectorAll('.controls input');

function handleChanges(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

changes.forEach(change=>change.addEventListener('change', handleChanges));
changes.forEach(change=>change.addEventListener('mousemove', handleChanges));
