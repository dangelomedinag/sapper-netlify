<script>
  if (typeof window !== 'undefined') {
    const form = new FormData();
    form.append('username', 'Groucho');
    form.append('username', 'Dangelo');
    form.append('accountnum', 123456);
    form.append('delete', true);

    console.log(Array.from(form.entries()));
    form.delete('delete');
    console.log(Array.from(form.entries()));

    console.log(form.get('username'));
    console.log(form.get('accountnum'));

    form.forEach((value, key, parent) => {
      console.log(value, key, parent);
    });

    console.log(form.getAll('username'));
    console.log(form.has('username'));
    form.set('newkey', 'new values');
    form.append('newkey', 'new values');
    console.log(Array.from(form.keys()));
    console.log(Array.from(form.values()));
  }
</script>

<code>testing!</code>
