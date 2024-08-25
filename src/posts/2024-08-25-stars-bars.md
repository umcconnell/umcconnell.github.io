---
title: Stars and Bars
date: 2024-08-25
description: >
    A short and useful theorem in combinatorics.
tags:
    - math
    - combinatorics
---

How many ways are there to distribute $n$ undistinguishable items into $k$ bins?
Consider the following illustration for the situation where we distribute $7$
items (stars) into 4 bins (intervals between bars) indicated by separators:

$$
    \star~\star~\text{\textbar}~\star~\star~\text{\textbar}~\text{\textbar}~\star~\star~~\star
$$

We see that the problem is equivalent to choosing $k-1$ out of the overall
$n + k - 1$ positions for separators (bars) before placing $n$ items (stars) in
the remaining slots.

This leads to the following conclusion:

{% msg "info", true, "Lemma (Stars and Bars)" %}

Let $n, k \in \mathbb{N}$ with $k \geq 1$. The number of ways to place $n$
undistinguishable items into $k$ bins is given by

$$
\tag{1}
    \binom{n + k - 1}{k - 1}
$$

Equivalently, eq. (1) gives the number of non-negative integer solutions to the
following equation where $x_i \in \mathbb{N}$ for $1 \leq i \leq k$:

$$
x_1 + \dots + x_k = n
$$

{% endmsg %}

## Example

Let's consider the following example problem, where $n, k \in \mathbb{N}$ with
$n \geq k$:

{% msg "quote", false %}
How many different ways are there to select exactly $k$ elements from
$\{1, \dots, n\}$ such that the sum of these elements is at most n?
{% endmsg %}

This problem can be reformulated as follows:

{% msg "quote", false %}
How many solutions does the inequality $x_1 + \dots + x_k \leq n$ permit for
natural numbers $x_i \geq 1$?
{% endmsg %}

We can rewrite the inequality to use non-negative integer variables $y_i$ by
adding $1$ to every variable, as well as adding a dummy term $y_{k+1}$
representing the (non-negative) difference between the right- and left-hand side
to obtain an equality:

$$
\begin{aligned}
    (y_1 + 1) &+ \dots + (y_k + 1) &&\leq n \\
    \iff y_1 &+ \dots + y_k + y_{k+1} &&= n - k
\end{aligned}
$$

By the Stars and Bars lemma (1), this problem has

$$
    \binom{(n - k) + (k + 1) - 1}{(k + 1) - 1} = \binom{n}{k}
$$

solutions.
