---
title: Kleitman-Winston Algorithm
date: 2024-03-19
description: >
    Graph containers & bounds on the number of independent sets in a locally dense graph.
tags:
    - math
    - combinatorics
    - graph theory
---

## Overview

We will show that for a locally dense graph we can give a strong upper bound on the number of
independent sets of a certain size. This specific method for graphs is an instance of the
so-called [container method](https://en.wikipedia.org/wiki/Container_method), that allows to
give bounds on structures appearing in larger objects with specific local properties. More
specifically as applied to graph theory, this turns out to be quite helpful in proving lower
bounds in [Ramsey theory](https://en.wikipedia.org/wiki/Ramsey_theory).

The proof presented here follows the one presented in the survey paper by Samotij [^1] using
methods originally presented in the paper by Winston and Kleitman [^2]. Some elementary knowledge
of graph theory is helpful, such as the notion of independent sets and induced subgraphs, but I
try to be as explicit and clear as possible. I will try to stick to common graph theoretical
notation, but for the sake of both readability and completeness an overview of notation is given
[at the end](#overview-of-notation) of the post.

## Basic bounds

Let's start with some basic bounds on the number of independent sets $|\mathcal{I}(G)|$ in a
graph $G$. Recall that an independent set is a set of vertices in which no two are connected by
an edge. If $\alpha(G)$ refers to the independence number, ie. the size of the largest independent
set in $G$, we can certainly say that

$$
    2^{\alpha(G)} \leq |\mathcal{I}(G)|
$$

because every subset of the largest independent set is itself an independent set (recall that
$2^{|N|}$ is the number of different subsets that can be formed from a set $N$).

Similarly, we can give an upper bound of

$$
    |\mathcal{I}(G)| \leq \sum_{k=0}^{\alpha(G)} \binom{|V(G)|}{k}
$$

as every independent set is a subset of size at most $\alpha(G)$ over the vertices of $G$.

## Theorem Statement

We will now bound the number of independent sets of a certain size in a locally dense graph by
showing that every independent set is part of a small container. These containers are constructed
with the Kleitman-Winston algorithm. By counting these countainers, we can estimate the number of
independent sets. The tightness property of the containers then allows us to give useful bounds on
the number of independent sets.

Let us now turn to the actual theorem. For $N, R, q \in \mathbb{N}$ and $\beta \in \mathbb{R}$ with
$\beta \in [0, 1]$, let $G$ be a graph on $N$ vertices satisfying:

$$
\tag{1}
    N \leq R e^{\beta q}
$$

In addition, we also require that G must be a $\beta$-locally dense graph. That is, for every
vertex subset $A \subseteq V(G)$ of size at least $R$ we have the following lower bound on the
number of edges in the induced subgraph $G[A]$:

$$
\tag{2}
    e_G(A) \geq \beta \binom{|A|}{2}
$$

Note that this corresponds to the situation where the subgraph spanned by $A$ over $G$ contains
at least a $\beta$-fraction of the edges of the corresponding complete graph over $A$, or in
other words, that the average degree of $A$ is at least $\beta (|A| - 1)$.

{% msg "info", true, "Theorem" %}

Given such a $\beta$-locally dense graph $G$ satisfying (1) and (2), we can construct up to
$\binom{N}{q}$ small containers $C_1, \dots, C_i$ for $1 \leq i \leq \binom{N}{q}$ of size at
most $R + q$. Every independent set of size exactly $q + k$ for $k \leq q$ belongs to a container
$C_i$.

For the number of independent sets in $G$ of size exactly $q + k$ we obtain:

$$
\tag{3}
|\mathcal{I}(G, q + k)| \leq \binom{N}{q} \binom{R}{k}
$$

{% endmsg %}

## Algorithm

Before describing the algorithm, let us fix a few technicalities. We need the notion of
max-degree ordering to ensure high-degree vertices are quickly removed from the graph and the
container quickly shrinks. For a vertex set $A \subseteq V(G)$, the max-degree ordering
$(v_1, \dots, v_{|A|})$ is defined by the degree of vertices over the induced subgraph $G[A]$
in descending order, where potential ties are broken by a fixed but arbitrary total order over
$V(G)$. In this case $v_1$ has the highest degree, etc.

The Kleitman-Winston algorithm works by iteratively removing high-degree vertices as outlined
above:

{% msg "algorithm", true, "Kleitman-Winston algorithm" %}

<style>.msg--algorithm ul ol { list-style-type: decimal; }</style>

-   `Input`: Independent set $I \in \mathcal{I}(G)$, integer $q \leq |I|$
-   `Output`: selected vertices $S$, available vertices $A$
-   `Procedure`:
    1. Set available vertices $A = V(G)$, selected vertices $S = \varnothing$
    2. Iterate for $i=1, \dots, q$:
        - Let $A = (v_1, \dots, v_{|A|})$ be ordered by max-degree
        - Let $t_i$ be the first index in the ordering of $A$ such that $v_{t_i} \in I$ <br>
          (i.e. first remaining vertex of $I$ by max-degree ordering in induced subgraph $G[A]$).
        - Move $v_{t_i}$ from $A$ to $S$
        - Remove higher-degree vertices $X_i = (v_1, \dots, v_{t_i - 1})$ from $A$: <br>
          $A = A \setminus X_i$
        - Remove $v_{t_i}$ and its neighborhood $\mathcal{N}_A(v_{t_i})$ from $A$: <br>
          $A = A \setminus (\{ v_{t_i} \} \cup \mathcal{N}_A(v_{t_i}))$
    3. Output $S$ and $A$

{% endmsg %}

The container of $I$ is given by $C := S \cup A$. Notice that the tightness of the container is apparent in that fact
that $S \subseteq I \subseteq C$.

## Proof

The algorithm maintains a few invariants, that help prove correctness: $|A|$ decreases monotonically as we remove vertices in every iteration, while $|S|$ increases monotonically.
Also notice that the previous observation $S \subseteq I \subseteq (S \cup A)$ holds at every
iteration of the algorithm.

It is clear that the algorithm always succeeds in constructing the set of selected vertices $S$
from $q \leq |I|$ vertices of $I$. This is because the algorithm always selects the next highest
degree vertex $v_i$ of $I$ occuring in the subgraph $G[A]$ at every step, i.e. no vertex
$v_i \in I$ is ever removed from $A$ and not added to $S$ as a discarded higher-degree vertex.
In addition, the vertices of $I$ form an independent set by assumption, and as such a vertex $v_i$
is never removed as part of the neighborhood of another selected vertex.

### Size of A

To conclude tightness of the containers, we must show that the final $A$ returned from the
algorithm is sufficiently small. In fact, we will show that $|A| \leq R$. In the following, we
will denote by $A_i$ the set of available vertices at the beginning of the i-th iteration of the
algortithm, and by $A'_i = A_i \setminus X_i$ the set of available vertices after removing
higher-degree vertices but before remoing $v_{t_i} \in I$.

First, note that by the [Handshaking lemma](https://en.wikipedia.org/wiki/Handshaking_lemma)
we obtain an expression for the average degree of vertices:

$$
\tag{4}
\frac{1}{|V|} \sum_{v \in V} deg(v) = \frac{2|E|}{|V|}
$$

Suppose for sake of contradiction $|A| > R$ for the final set of available vertices. Then it must
be that the $v_{t_i} \in S$ selected in every iteration must have been selected from a set of size
at least $R$, even after removal of other higher-degree vertices (recall that $|A|$ decreases
monotonically throughtout the algorithm). Or, in other words, at the start of the i-th iteration
with currently available vertices $A_i$ and higher-degree vertices $X_i$ scheduled for removal,
$|A'_i| := |A_i \setminus X_i| > R$.

Using the bound (2) on the edge-count:

$$
    e_G(A'_i) \geq \beta \binom{|A'_i|}{2} = \beta \frac{|A'_i|(|A'_i|-1)}{2}
$$

As we choose $v_{t_i}$ with maximum degree from $A'_i$, we know $v_{t_i}$ must at least have the
average degree (4) of $A'_i$:

$$
\deg_{A'_i}(v_{t_i}) \geq \frac{2e_G(A'_i)}{|A'_i|} \geq \beta (|A'_i| - 1)
$$

Recalling the definition of $|A'_i|$:

$$
\begin{aligned}
    |A'_i| - 1 = |A_i \setminus X_i| - 1 &= |A_i| - |X_i| - 1 \\
    |A_i| - (t_i - 1) - 1 &= |A_i| - t_i
\end{aligned}
$$

In total we remove $|X_i| + |\mathcal{N}(v_{t_i})| + 1$ vertices from $A_i$ in every round.
Putting everything together:

$$
\begin{aligned}
    |A_{i+1}| &\leq |A_i| - (|X_i| + |\mathcal{N}(v_{t_i})| + 1) \\
    & \leq |A_i| - (|X_i| + \deg_{A'_i}(v_{t_i})) \\
    &\leq |A_i| - (t_i + \beta (|A_i| - t_i) ) \\
    &\leq |A_i| - \beta|A_i| = |A_i| (1 - \beta)
\end{aligned}
$$

where we used that $\beta \leq 1$ for the last inequality

We find that the set of available vertices $A$ shrinks at least by a factor of $(1 - \beta)$ in
every iteration. Together with the fact that the initial set $A$ is $V(G)$ we obtain a
contradiction to the initial condition (1) on the number of vertices in $G$:

$$
\tag{5}
    |A| \leq (1 - \beta)^q N \leq e^{-\beta q} N \leq R
$$

Here we used the well-known inequality $(1 + x) \leq e^x$. After $q$ iterations, the initial set
of available vertices has necessarily shrunk to a set of at most $R$ vertices.

### Final bound

Let us now finally give the bound on the number of independent sets of size exactly $q + k$.
The bound (3) follows from the observation, that there are at most $\binom{N}{q}$ different ways
to choose $S$ and therefore the first $q$ vertices of an independent set, and at most
$\binom{R}{k}$ different ways to choose the $k$ remaining vertices from $A$, which has size at
most $R$.

Another useful, but less sharp bounds, can be obtained from one of the various inequalities on
the binomial coefficient:

$$
\tag{6}
|\mathcal{I}(G, q + k)| \leq \frac{N^q}{q!}\binom{R}{k}
$$

[Wikipedia](https://en.wikipedia.org/wiki/Binomial_coefficient#Bounds_and_asymptotic_formulas)
has an extensive collection of such bounds.

## Overview of notation

-   Vertex set $V(G)$
-   Edge count $e_G(X)$: Number of edges in $G$ on vertex set $X$
-   Neighborhood $\mathcal{N}(v)$: set of vertices adjacent to $v$
-   Induced subgraph $G[A]$: Obtained from $G$ by keeping all vertices in $A$ and their edges among them
-   Independence number $\alpha(G)$: Size of largest independent set in $G$
-   Independent sets $\mathcal{I}(G)$: Collection of all independent sets in $G$
-   Independent sets $\mathcal{I}(G, m)$: Collection of all independent sets in $G$ of size exactly $m$

## Further reading

Some ressources for further details, including applications to various combinatorial problems
and extensions of the container method to hypergraphs, are given below:

-   Wikipedia: https://en.wikipedia.org/wiki/Container_method
-   Survey paper by Samotij: https://arxiv.org/pdf/1412.0940.pdf
-   Lecture notes by Liu: https://homepages.warwick.ac.uk/staff/H.Liu.9/topic-comb-lecture15.pdf

[^1]: https://arxiv.org/pdf/1412.0940.pdf

[^2]: https://doi.org/10.1016/0012-365X(82)90204-7
