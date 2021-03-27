---
title: Fibonacci in Rust
date: 2021-03-13
description: >
    This post goes through different approaches to generating the Fibonacci
    sequence in Rust. It compares the speed of these approaches using the
    benchmarking crate criterion.
tags:
    - programming
    - rust
    - fibonacci
---

You've probably already heard of the Fibonacci sequence. It is a sequence of
numbers named after the mathematician
[Leonardo of Pisa](https://en.wikipedia.org/wiki/Fibonacci), that's generated
using a simple rule, yet pops up in many unexpected places in math and nature,
often in relation to the golden ratio.

To generate the sequence, start with the sequence `1, 1`. Then, generate the
next element in the sequence by adding up the last two elements:

-   `1, 1`
-   `1, 1, 2`
-   `1, 1, 2, 3`
-   ...

Mathematically, this can elegantly be expressed using recursion. In this
formula, _n_ represents a given position in the sequence starting with _0_.

$$
fib(n) = \begin{cases}
    1 &\text{if } n \leq 1 \\
    fib(n-2)+fib(n-1) &\text{if } n \gt 1
\end{cases}
$$

## Implementation

We will be implementing the Fibonacci logic using Rust. Rust is a programming
language initially developed at Mozilla that can guarantee memory safety, while
at the same time being super fast. We'll try out different approaches and see
which one runs fastest.

If you want to follow along on your computer, you can find simple installation
instructions for Rust and cargo, the Rust package manager, for just about any
OS, on the Rust homepage:
https://www.rust-lang.org/tools/install.

Alternatively, you can also code along online on the
[Rust playground](https://play.rust-lang.org/) without having to install
anything!

### Setup

{% msg "info", false %}
If you are not coding along on your machine, feel free to skip this section.
{% endmsg %}

First, let's create a new Rust library project from the command-line using
cargo:

```bash
cargo new --lib rust_fibonacci
cd rust_fibonacci/
```

The file `src/lib.rs` is where we'll be writing source code later on. You can
delete it's pregenerated contents for now, as we won't go through writing tests
for such a simple program.

Now, the only aspect missing is the benchmarking, so that we can compare the
different approaches to calculating the Fibonacci sequence. To do this, we can
use the [criterion crate](https://docs.rs/crate/criterion/0.3.3), which allows
us to write benchmarks and run them using cargo. Add the following code to the
`Cargo.toml` file, just below the `[dependencies]` section at the bottom:

```toml
[dev-dependencies]
criterion = "0.3"

[[bench]]
name = "fibonacci_benchmark"
harness = false
```

Create a directory called `benches` in the base directory and place an empty file
called `fibonacci_benchmark.rs` into it.

Once you're done, the `rust_fibonacci/` project directory content should look
something like this:

```
.
├── benches
│   └── fibonacci_benchmark.rs
├── Cargo.lock
├── Cargo.toml
└── src
    └── lib.rs
```

## \#1: Standard

{% msg %}
If you're using the Rust playground, just add all the code examples above the
`main` function. The playground just allows you to use one single file to write
your code in.
{% endmsg %}

Now, let's get coding! Probably the most straightforward way to implement the
Fibonacci sequence, would be to just start with two variables `a` and `b`, that
keep track of the last two elements of the sequence and build from there. Let's
do that! Add this code to `src/lib.rs`:

```rust
pub fn fib_standard(n: usize) -> usize {
    let mut a = 1;
    let mut b = 1;

    for _ in 1..n {
        let old = a;
        a = b;
        b += old;
    }

    b
}
```

Notice the `pub` keyword: We use it, so that we can import the code from other
files. This will be useful when benchmarking the functions later on.

Here, we declare `a` and `b` as `mut`, i.e. _mutable_, to allow us to mutate
or change their values. In Rust, all variables are _imutable_ by default.

We start our loop at `1`, because the first two values are already defined and
the range is non-inclusive for its end.

## \#2: Recursion

Another approach to implementing the Fibonacci algorithm would be to just
translate the recursive mathematical definition from the introduction into Rust
code. Add the following function in `src/lib.rs`:

```rust
pub fn fib_recursive(n: usize) -> usize {
    match n {
        0 | 1 => 1,
        _ => fib_recursive(n-2) + fib_recursive(n-1),
    }
}
```

In this case, the match operator comes in really handy. It works just like the
conditional function definition in math! It is short, clean and concise. This
means we don't have to write endless `if { ... } else if { ... } else { ... }`
clauses.

One last thing to note, is the implicit return. We did not have to use the
`return` statement, because the last expression is automatically returned.
However, it is important not to end with a semi-colon, which would make the
function return nothing (or `()`, to be more precise).

When we take a close look at this function, it might become clear that it is
pretty inefficient. When calculating `fib_recursive(n)`, we end up calculating
the Fibonacci sequence twice every step down from `n`, although
it would be enough to calculate the sequence once. This is where
[memoization](https://en.wikipedia.org/wiki/Memoization) comes in.

{% msg "info", true, "Runtime complexity" %}

The recursive approach has the runtime complexity $O(2^n)$.

This is because the time complexity of `fib_recursive(n)`
_approximately doubles_ for every `n`, because it computes `fib_recursive(n-1)`
and `fib_recursive(n-2)`.

If we want to be more exact about the statement "it approximately doubles", we
can say the following about this factor $a$:

$$

\begin{aligned}
a^n &= a^{(n-1)} &+ &a^{(n-2)} \quad | : a^{(n-2)} \\
a^2 &= a &+ &1 \\
a   &= \frac{1 \pm \sqrt{5}}{2}
\end{aligned}
$$

We can safely ignore the second solution $\frac{1 - \sqrt{5}}{2}$, which is
negative. This leaves us with $a = \frac{1 + \sqrt{5}}{2}$, the
[golden ratio](https://en.wikipedia.org/wiki/Golden_ratio). What a coincidence!
The asymptotically tight bound on the running time of `fib_recursive` is thus
$\Theta(a^n)$, where $a$ is the golden ratio.

You can find out more about asymptotic notation in computer science on
[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation).

{% endmsg %}

## \#3: Memoization

We will use a
[std::collections::HashMap](https://doc.rust-lang.org/std/collections/struct.HashMap.html),
which is similar to a `dict` in Python or an `Object` in JavaScript,
to keep track of all the values we've already calculated. Then, we can quickly
check, whether a given value has already been encountered and can return this,
before wasting time on a redundant calculation. Add this code to your `lib.rs`
file:

```rust
use std::collections::HashMap;

pub fn fib_memoization(n: usize, memo: &mut HashMap<usize, usize>) -> usize {
    if let Some(v) = memo.get(&n) {
        return *v;
    }

    let v = match n {
        0 | 1 => 1,
        _ => fib_memoization(n-2, memo) + fib_memoization(n-1, memo),
    };

    memo.insert(n, v);
    v
}
```

We first check, whether the current _n_ is in the HashMap, by checking whether
the value at _n_ is `Some`. If no value has jet been recorded, `memo.get(&n)`
will return `None` and the pattern won't match.

Next, we compute the sequence value just as when using plain recursion. The only
difference is, that we save the value to our memo before returning it.

Notice how we write `&mut HashMap<usize, usize>` in the function definition.
This is part of Rust's borrow checker, that ensure memory safety for our
program. By declaring the memo as _mutable_, Rust ensures that only one part of
the program has write access at a time and that no other part of the program can
read from the memo while we have write access to it and might be modifying it
unexpectedly.

## \#4: Iterator

One last way to implement the Fibonacci sequence that this post will cover is
using Rust iterators. You might be familiar with this concept, especially if
you've already used
[Generators in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
or [Iterators in Python](https://docs.python.org/3/library/stdtypes.html#iterator-types).

Rust iterators implement the
[`Iterator` trait](https://doc.rust-lang.org/std/iter/trait.Iterator.html) and
expose a `next` function, which returns the next element of the iterator or
`None`, if the iteration is over.

Lets implement this iterator principle using a `struct`. The struct will save
the last two elements `a` and `b` of the sequence, starting at `1`. It will
then generate the next value just as in the standard approach:

```rust
pub struct FibIterator {
    a: usize,
    b: usize
}

impl Default for FibIterator {
    fn default() -> Self {
        FibIterator { a: 1, b: 1 }
    }
}

impl Iterator for FibIterator {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        let curr = self.a;
        self.a = self.b;
        self.b = curr + self.a;

        Some(curr)
    }
}
```

A few things to notice here. First, notice how we all methods of the struct are
wrapped in `impl` blocks. This separates the struct definition from it's
methods, helping your code stay clean.

Also, we write a default method that takes no arguments and returns an
initialized `FibIterator`. As this method is not associated to a struct
instance, i.e. an initialized `FibIterator` with concrete values for `a` and
`b`, it is called an _associated function_. We can call these types of functions
using `::`. In this case, we would call `FibIterator::default()` to construct a
new instance.

The `Iterator` and `Default` traits are implemented using the `impl Foo for Bar`
statement. In the `impl` block of the `Iterator` trait, we define a next
function that just returns the sum of the two last elements in the sequence.
This way, the iterator can just keep generating new integers of the sequence
**on demand**. Because iterators in Rust are lazy, these integers are only
generated when needed.

{% msg "info" %}

A trait is a set of common functions all structs must implement, to have this
trait. In the case of `Iterator`, this is solely the `next` function.

Traits are useful, because they allow other functions to accept different types,
while making sure that all of these different types share a common interface.

When implementing `Iterator`, this trait unlocks a whole set of other useful
methods such as `skip`, `take`, `filter`, and many more, that all rely on the
`next` method we implemented. These all come built-in with the trait and we
don't need any additional work to implement these.

Iterators are an important part of Rust, as they allow to write code in a
concise functional style, while incurring no additional performance. When
compiling the code, Rust will optimize the operations away and turn the
iterators into classical for loops in the background. That means you don't have
to choose between writing fast and clean code, you can do both!
{% endmsg %}

## Bechmarking

Finally, we will compare the different approaches by benchmarking the different
functions. Add the following code to the `benches/fibonacci_benchmark.rs` file.
Note that benchmarking does not seem possible on the online Rust playground.

```rust
use criterion::{criterion_group, criterion_main, BenchmarkId, Criterion};
use rust_fibonacci::*;
use std::collections::HashMap;

fn bench_fibs(c: &mut Criterion) {
    let mut group = c.benchmark_group("Fibonacci");

    for i in [20, 21].iter() {
        group.bench_with_input(BenchmarkId::new("Standard", i), i, |b, i| {
            b.iter(|| fib_standard(*i))
        });

        group.bench_with_input(BenchmarkId::new("Recursion", i), i, |b, i| {
            b.iter(|| fib_recursive(*i))
        });

        group.bench_with_input(BenchmarkId::new("Memoization", i), i, |b, i| {
            b.iter(|| {
                let mut memo = HashMap::new();
                fib_memoization(*i, &mut memo);
            })
        });

        group.bench_with_input(BenchmarkId::new("Iterator", i), i, |b, i| {
            b.iter(|| {
                FibIterator::new().nth(*i).unwrap();
            })
        });
    }
    group.finish();
}

criterion_group!(benches, bench_fibs);
criterion_main!(benches);
```

This code creates a test group called `Fibonacci` and benchmarks the four
different approaches using the same input. Run the benchmark in your terminal:

```bash
cargo bench
```

Once the benchmarks are done, you can view a nice HTML report in your browser by
opening `target/criterion/Fibonacci/report/index.html`. Running on my machine
gave me the following stats:

![Performance plot of the different methods](/assets/images/posts/fibonacci-rust/perf_plot.svg)

You can clearly see, that the naive recursive solution is the least performant
approach, as its execution time increases (exponentially, but not visible with
2 inputs) with the workload. The memoized version, in contrast, shows a great
improvement, but it still incurs the performance overhead of initializing and
managing the memo, making it less performant than the two last approaches.

The iterator and standard seem to be indistinguishable. On my machine, the
execution of the iterator takes `~34ns` for both inputs, the standard approach
around `~4.5ns` for both inputs.

You can find more detailed graphs and charts for every function in the
corresponding `target/criterion/Fibonacci/<APPROACH>/report/index.html` folder.

## Conclusion

We've implemented and benchmarked four different approaches to generating the
Fibonacci sequence.

Although the recursive solution is short and concise, it is by far the least
performant and can become too slow to calculate for larger inputs. The memoized
solution is interesting, in that it combines the conciseness of the recursive
approach with a greater speed. The standard approach, on the other hand, seems
to be the fastest, but it is arguably the least elegant.

Finally, the iterator solution appears to be by far the most versatile while at
the same time being very fast. Additionally, it allows the user to work with the
sequence in a very convenient way, e.g. by filtering, mapping, etc.

Overall, it becomes clear that iterators are a very versatile and performant
aspect of Rust, that are also worth considering in other languages such as
Python or JavaScript.

The final code of this project is open source and available here:
https://github.com/umcconnell/rust_fibonacci

Feedback, questions, comments or improvements are welcome!

Thanks for reading.
