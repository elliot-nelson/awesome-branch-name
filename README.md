# awesome-branch-name

> Easily generate warm, crunchy branch names. Perfect for people who enjoy a cheesy,
> flakey branch, but don't always have the energy to come up with a good name.

## Install

Install globally to generate delicious branch names with maximum efficiency.

```sh
$ npm install -g awesome-branch-name
$ awesome-branch-name
```

## Usage

Print an awesome branch name.

```sh
$ awesome-branch-name
```

Or, you can run using `npx` (so portable!).

```sh
$ npx awesome-branch-name
```

Immediately checkout a new, flavorful branch.

```sh
$ git checkout -b `awesome-branch-name`
```

If you want a prefix, do it yourself.

```sh
$ git checkout -b "dev/`awesome-branch-name`"
```

If your branch has a particular focus, you can provide an optional subject on the
command line, which will be baked into the output.

```sh
$ git checkout -b "dev/`awesome-branch-name MyNewFeature`"
```

Save it in your `.bashrc` and use it everyday.

```sh
branch() {
  git checkout "dev/`awesome-branch-name $1`"
}
```

Or if you prefer `npx`, make sure to specify `-q`.

```sh
branch() {
  git checkout "dev/`npx -q awesome-branch-name $1`"
}
```

## Contributing

Put up a pull request! Suggestions on new words, new word patterns, or improved name
selection logic are all highly encouraged.

## License

Licensed under MIT. [Full license here &raquo;](LICENSE.txt)

