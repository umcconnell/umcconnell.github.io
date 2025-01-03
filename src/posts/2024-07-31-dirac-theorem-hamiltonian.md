---
title: Dirac's theorem on Hamiltonian Graphs
date: 2024-07-31
description: >
    Three different proofs of Dirac's theorem on Hamiltonian cycles in graphs with sufficient minimum degree.
tags:
    - math
    - graph theory
---

## Overview & Background

Continuing the theme of [last post](/posts/2024-03-19-kleitman-winston/), we will look at a classic result in graph
theory, namely Dirac's theorem on Hamiltonian cycles. This result was first published by
[Gabriel A. Dirac](https://en.wikipedia.org/wiki/Gabriel_Andrew_Dirac) in 1952 [^dirac], with later refinements
by Ore, as well as Bondy and Chvátal. Three proofs of the theorem will be presented: the original proof from Dirac's paper,
an induction proof, and a short and direct proof. We will also consider the tightness of the bound as well as a
generalization by Ore.

As a little historical sidenote before diving into the mathematics, Gabriel Dirac was the son of Margit Wigner,
the sister of famous physicist Eugene Wigner. After a first marriage, from which Gabriel was born, Margit later
remarried Eugene Wigner's friend Paul Dirac, another equally famous physicist and one of the founders of
Quantum Mechanics. Subsequently, Gabriel chose to take on the name Dirac. More interesting biographical details
can be found in the essay about [Paul Dirac](https://mathshistory.st-andrews.ac.uk/Biographies/Dirac/) on MacTutor.

[[toc]]

## Dirac's theorem

Although the following definitions are standard in graph theory, it is useful to specify them at the outset
as these terms are often used rather loosely. A path is a sequence of non-repeating vertices and edges, where
subsequent vertices are connected by an edge in the graph. Usually we distinguish between open and closed paths,
where as the name implies, an open path just has different start and end vertices, while a closed path starts
and ends with the same vertex. A closed path is also called a cycle. The length of a cycle is the number of distinct
vertices on the cycle (the equal start- and end-vertex is not counted twice). As always, I will try to stick to
common graph theoretical notation and conventions, but for the sake of both readability and completeness an overview
of [notation](#overview-of-notation) is given at the end of the post.

A Hamiltonian cycle is a cycle through a graph that visits every vertex exactly once. This concept might sound similar
to Euler tours, that are historically at the origin of graph theory. An Euler tour is a cycle that visits every edge
exactly once, while repeated vertices are allowed. However, in contrast to Euler tours which can be found in a graph in
linear time $\mathcal{O}(|V|+|E|)$, finding and even checking whether a graph contains a Hamiltonian cycle is in general
$\mathcal{NP}$-complete, i.e. no known polynomial time exists for this problem. Finding a Hamiltonian cycle and the related
optimization problem of finding a lowest weight Hamiltonian cycle (known as the
[travelling salesperson problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)) has many applications
from computer graphics and circuit design to cargo routing and bioinformatics.

We will consider Dirac's theorem, which is a sufficient condition for graphs to contain a Hamiltonian cycle:

{% msg "info", true, "Theorem (Dirac, 1952)" %}

Let $G = (V, E)$ be a graph with $|V| \geq 3$ and minimum degree $\delta(G) \geq \frac{|V|}{2}$ on every vertex.
Then $G$ contains a Hamiltonian cycle.

Equivalently, every graph with minimum degree $\delta(G) = d$ and at most $|V| \leq 2d$ vertices contains a Hamiltonian
cycle.

{% endmsg %}

Notice that the conditions of this theorem are not necessary for a Hamiltonian cycle, as for example a cycle graph $C_n$
on $n$ vertices violates the degree condition but clearly contains a Hamiltonian cycle.

## Connectedness

As a warm-up we'll start by showing that such a "Dirac-graph" is connected, ie. $G$ contains a path between
any two vertices. In his original paper, Dirac writes in the theorem formulation that the graph must be
connected, but as we will see now, this is not strictly necessary. Every graph that obeys the degree condition
must also be connected.

In fact, we will see that any two vertices are connected by a path of length at most two, where the length of a
path is defined as the number of edges along that path. Consider two arbitrary vertices $u, v \in V$. Without loss
of generality we may assume that $\{u, v\} \not \in E$, as otherwise we would be done. We therefore know that the
neighborhoods $\mathcal{N}(u), \mathcal{N}(v)$ of $u$ and $v$ respectively do not contain the other vertex. But
by the assumption on the minimum degree in $G$ we also know that $\mathcal{N}(u) \geq \frac{|V|}{2}$ as well as
$\mathcal{N}(v) \geq \frac{|V|}{2}$. We can now apply the pigeonhole principle to conclude that $u$ and $v$ must
have a neighbor in common, and are therefore connected by a path of length $2$: Both neighborhoods do not contain
$u$ and $v$ by the previous observation, so we are trying to distribute two neighborhoods of size at least
$\frac{|V|}{2}$ onto $|V| - 2$ vertices. The two must necessarily intersect.

Alternatively, this same fact can be seen by applying the inclusion-exclusion principle:

$$
    |\mathcal{N}(u) \cap \mathcal{N}(v)| = \underbrace{|\mathcal{N}(u)|}_{\geq \frac{|V|}{2}}
    + \underbrace{|\mathcal{N}(v)|}_{\geq \frac{|V|}{2}} -
    \underbrace{|\mathcal{N}(u) \cup \mathcal{N}(v)|}_{\leq |V \setminus \{u, v\}| = |V| - 2}
    \geq 2
$$

We can already start seeing, why this theorem is tight. Relaxing the degree constraint on the vertices would
for example allow a graph $G'$ that is the disjoint union of two complete subgaphs on half of the vertices:
for $X = K_{\frac{|V|}{2}}$ and $Y = K_{\frac{|V|}{2}}$ (ignoring odd $|V|$ for simplicity here) we could
construct $G' = X \uplus Y$ with a minimum degree of $\delta(G') = \frac{|V|}{2} - 1$ for every vertex.
This graph clearly does not contain a Hamiltionian cycle

In the following three proofs, we will always assume that $G$ is a graph as described in the theorem,
i.e. $G = (V, E)$ with $\delta(G) \geq \frac{|V|}{2}$.

## Original proof

Dirac's original proof [^dirac] is a little more convoluted, but we will consider it for completeness.
It contains a few unnecessary convolutions, such as two nested proofs by contradiction, that hide
the essence of the argument. Feel free to skip to the [next section](#double-induction) if you are not
interested in the exact technical details of the original paper.

We will start by showing the following lemma:

{% msg "info", true, "Lemma 1" %}

Let $G = (V, E)$ be a graph as defined in Dirac's theorem. Then $G$ contains a cycle of length at least $\delta(G) + 1$.

{% endmsg %}

A longest path $P = v_1, \dots, v_k$ in $G$ must contain at least $\frac{|V|}{2} + 1$ vertices, because $v_1$ has
at least $\delta(G) = \frac{|V|}{2}$ neighbors. Otherwise $v_1$ would have a neighbor outside of $P$ that we could
use to extend $P$. Therefore, all neighbors of $v_1$ must lie on $P$, which immediately yields a cycle of length at
least $\delta(G) + 1$: $v_1, \dots, v_i, v_1$ where $i \geq \delta(G) + 1$ is the highest index of neighbors of $v_1$
along $P$.

Now assume for sake of contradiction that the theorem is false, i.e. there exists a graph $G = (V, E)$ satisfying
$|V| \geq 3$ and $\delta(G) \geq \frac{|V|}{2}$ on every vertex that does not contain a Hamiltonian cycle.
Let $C = v_1, \dots, v_k$ be the longest cycle in $G$. By our assumption, $C$ has length at most
$|V| - 1$. From the lemma it also follows that the cycle $C$ must have length at least $\frac{|V|}{2} + 1$.

As $G$ is connected, some node in $C$, let's assume without loss of generality that it is $v_k$, must be connected to some
node $v_{k+1}$ in $V \setminus C$. We will now consider the longest path $P' = v_{k}, v_{k+1}, \dots, v_{k + l}$ that
is entirely contained in $V \setminus C$ except for $v_k$. By the same observation as in the proof for the lemma,
$v_{k + l}$ can only be connected to $v_1, \dots, v_k, \dots, v_{k + l - 1}$.

Under these assumptions made for sake of contradiction, the following lemma holds:

{% msg "info", true, "Lemma 2" %}

Under the assumption that Dirac's theorem is false, it holds that $l \geq \frac{|V|}{2}$.

{% endmsg %}

We will show this lemma again by contradiction. If $l \leq \frac{|V|}{2} - 1 < \frac{|V|}{2}$, then $v_{k+l}$
must be connected to at least $\delta(G) - l \geq \frac{|V|}{2} - l \geq 1$ vertices in
$v_1, \dots, v_{k-1}$, excluding vertices $v_k, \dots, v_{k+l-1}$ in $P'$. So $v_{k + l}$ must be connected to
another vertex $v_i \in C$ with $v_i \not = v_k$. We can estable the following two inequalities on $i$:

- $i \geq l + 1$: We can form a new cycle $C' = v_{k + l}, v_i, \dots, v_k, \dots, v_{k + l}$ of length $k + l - i + 1$.
  Because $C$ is the longest cycle in $G$, we obtain $k + l - i + 1 \leq k \iff i \geq l + 1$
- $i \leq k - l - 1$: We could also form a new cycle $C'' = v_1, \dots, v_i, v_{k + l}, \dots, v_k, v_1$ of length
  $i + l + 1$. Just as before we obtain $i + l + 1 \leq k \iff i \leq k - l - 1$.

By the two inequalities, we conclude that $v_{k + l}$ is connected to at least $\frac{|V|}{2} - l \geq 1$ vertices
in $I = v_{l + 1}, \dots, v_{k - l - 1}$. Notice that there are $|I| = k - 2l - 1$ such vertices.

However, it is also not possible that $v_{k + l}$ is joined to two neighboring vertices $v_i$ and $v_{i + 1}$ in $I$, as
this would contradict the maximality of the original cycle $C$. Otherwise $C$ could have been extended to
$v_1, \dots, v_i, v_{k + l}, v_{i + 1}, \dots, v_k, v_1$ of length $k + 1$. By this observation, there must therefore be at
least $2 \left(\frac{|V|}{2} - l\right) - 1$ such vertices in $I$ in order to intersperse every neighboring vertex of $v_{k + l}$ with
a non-neighbor. Putting all these inequalities together, we finally obtain:

$$
    |I| = k - 2l - 1 > 2 \left(\frac{|V|}{2} - l\right) - 1 \iff k \geq |V|
$$

But this cannot be, as we assumed that $C$ is not a Hamiltonian cycle. This proves lemma 2.

Proving Dirac's theorem is now fairly straightforward, by completing the outer proof by contradiction. As we have
already observed previously, $C$ has length at least $\frac{|V|}{2} + 1$ by lemma 1. Because $G$ is composed of at
least $C$ and $P'$, both distinct from each other by construction, we can apply our bound on $|P'|$ from lemma 2:

$$
    |V| \geq |C| + |P'| \geq \frac{|V|}{2} + 1 + \frac{|V|}{2} \geq |V| + 1
$$

This contradiction concludes the proof.

## Double induction

As a first proof of Dirac's theorem, we will consider a proof by induction. This uses the
so-called rotation-extension technique by Pósa[^posa]. Personally, I find this proof to be the
most elegant of the three, especially because of the neat double induction that is used. The
general structure of the proof consists of two parts:

- A $k$-cycle implies the existence of a $k+1$-path, as $G$ is connected
- A $k$-path implies the existence of a $k+1$-path or a $k$ cycle.

By induction $G$ thus has an $|V|$-cycle, i.e. a Hamiltonian cycle.

Recall that we already saw previously, that [G is connected](#connectedness). This fact will be
needed in the induction proof.

### Induction I

<img
src="/assets/images/posts/dirac-theorem-hamiltonian/dirac_induction_1.png"
alt="Induction proof I"
style="float:right;max-width: 20rem;width:100%;margin: 0 0 1.5rem 1.5rem">

For $k < |V|$, a $k$-cycle implies the existence of a $k+1$-path.

Let $C = v_1, \dots, v_k, v_1$ be such a cycle in $G$. Because $G$ is connected, there
exists an edge $e = (w, v_i)$ from $V \setminus \{v_1, \dots, v_k\}$ to $C$, where $w$ is a
vertex outside of the cycle. Without loss of generality we may assume that $v_i = v_1$.
We have found a $k+1$-path $w \rightarrow v_1 \rightarrow \dots \rightarrow v_k$.

### Induction II

A $k$-path implies the existence of a $k+1$-path or a $k$-cycle.

Let $P = v_1, \dots, v_k$ be such a path in $G$.

1.  **Case** $\mathcal{N}(v_1) \not \subseteq \{v_2, \dots, v_k\}$: $P$ can be
    extended to a $k+1$-path $w \rightarrow v_1 \rightarrow \dots \rightarrow v_k$, where $w$
    is a neighbor of $v_1$ not in $P$.
2.  **Case** $\mathcal{N}(v_k) \not \subseteq \{v_1, \dots, v_{k-1}\}$: same as above
3.  <img
            src="/assets/images/posts/dirac-theorem-hamiltonian/dirac_induction_2.png"
            alt="Induction proof II"
            style="float:right;max-width: 20rem;width:100%;margin: 0 0 1.5rem 1.5rem">
    **Case** $\mathcal{N}(v_1) \subseteq \{v_2, \dots, v_k\}$ and
    $\mathcal{N}(v_k) \subseteq \{v_1, \dots, v_{k-1}\}$:

    Let the extended neighborhood
    $\mathcal{N}^+(v_k) := \{ v_{i+1} \;\vert\; v_i \in \mathcal{N}(v_k)\}$ be the set of successors of neighbors on the path. Note that by assumption, all neighbors (and their successors) of $v_k$ lie on $P$. By applying the inclusion-exclusion principle again we obtain:

    <!-- This is a bit of a hack to prevent the large formula from overflowing with scrollbars
        when the relative image size becomes too large. Instead, the formula should then break
        to a new line. This is achieved by using clamp with a minimum width of 35rem. A clean
        solution should probably use flexbox in some way or another. -->
    <style>#katex-list-floating-image-wrapper span.katex-display { width: clamp(35rem, 35rem, 100%); }</style>
    <span id="katex-list-floating-image-wrapper">

    $$
    |\mathcal{N}(v_1) \cap \mathcal{N}^+(v_k)| =
        \underbrace{|\mathcal{N}(v_1)|}_{\geq |V|/2} +
        \underbrace{|\mathcal{N}^+(v_k)|}_{\geq |V|/2} -
        \underbrace{|\mathcal{N}(v_1) \cup \mathcal{N}^+(v_k)|}_
        {\subseteq V\setminus\{v_1\} \implies \leq |V| - 1} \geq 1
    $$

    </span>

    This implies that there exists a $v_i$ in $\mathcal{N}(v_1) \cap \mathcal{N}^+(v_k)$.
    We have found a $k$-cycle $v_1 \rightarrow \dots \rightarrow v_i \rightarrow v_k \rightarrow \dots \rightarrow v_{i+1} \rightarrow v_{1}$

### Conclusion

By combining both parts of the induction, we conclude that there must exist an $n$-path, and by
Induction II, an $|V|$-cycle, i.e. a Hamiltonian cycle in $G$, as $G$ cannot contain an $|V|+1$ path
(paths have distinct vertices).

## Direct proof

This is the shortest of the three proofs that will be presented, and is conceptually very similar to the
[induction proof](#double-induction). It can be found in standard textbooks on graph theory, such as the
one by Diestel [^diestel]. We will first inspect a longest path in $G$ and show that it can be extended
to a cycle. We will then prove that this cycle must actually be a Hamiltonian cycle.

Consider a longest path $P = v_1, \dots, v_k$ in $G$. All edges of $v_1$ and $v_k$ must end in $P$,
as otherwise we could extend $P$, contradicting the fact that $P$ is a longest path. By the same argument
as in case 3 of [Induction II](#induction-ii), we can find an edge $v_i v_{i+1}$ in the path,
where also both $\{v_1, v_{i+1}\} \in E$ and $\{v_i, v_k\} \in E$. We can then turn $P$ into a cycle
$C = v_1, v_{i+1}, \dots, v_k, v_i, \dots, v_1$.

Finally, assume for sake of contradiction that $C$ is not a Hamiltonian cycle. Then there must exist
at least one vertex in $V \setminus C$. However, as $G$ is connected, there must also exist an edge
$\{u, v_i\}$ for $u \in V \setminus C$ and $v_i \in C$, where we can assume $v_i = v_1$ without loss
of generality. This is a contradiction to our initial assumption that $P$ is a longest path in
$G$, as $u, v_1, \dots, v_k$ would form a longer path.

## Tightness

We will use the second equivalent formulation of Dirac's theorem, that bounds the number of vertices as a function of the minimum degree
$d = \delta(G)$. This will make the tightness result simpler to formulate.

Let us first make a general observation about bipartite graphs that will come in handy in a moment.
Recall that bipartite graphs are graphs that can be seperated into a disjoint union of two sets $X$
and $Y$ with edges only between these two sets.

{% msg "info", true, "Lemma" %}

Bipartite graphs cannot contain cycles of odd length (where length refers to the number
of edges along the path).  
Equivalently, a cycle $v_1, \dots, v_n, v_1$ with $n$ odd cannot exist.

{% endmsg %}

First, notice that any path in a bipartite graph consists of alternating vertices from both sets,
because a vertex is only connected to vertices from the other set. Therefore
any path of odd length must have start and end vertices in different sets, which cannot
possibly form a cycle where start and end vertex are the same.

The construction exhibiting tightness is a simple bipartite construction. We will construct a graph with $2d+1$
vertices and show that this graph does not contain a Hamiltonian cycle. Consider vertices $v_1, \dots, v_{2d+1}$
and let "even" vertices be those with an even index while "odd" vertices refer to those with an odd index.
We connect every even vertex only to all other odd vertices and vice-versa. This construction can also be compactly
written as $K_{d+1, d}$ using standard graph theory notation.

There are $d+1$ odd vertices and $d$ even vertices, i.e. we are "barely" violating the degree conditions of the initial
theorem. Even vertices have degree $d_{\text{even}} = \lceil \frac{2d+1}{2} \rceil = d + 1$ while odd vertices have degree
$d_{\text{odd}} = \lfloor \frac{2d+1}{2} \rfloor = d$.

Notice however, that this graph is clearly bipartite: Color say all even vertices red and all odd vertices blue,
then by construction vertices of the same parity are not connected. But bipartite graphs cannot contain odd-length
cycles as seen in the lemma above, which shows that this construction cannot contain a Hamiltonian cycle.

## Ore's theorem

Finally, let's consider a generalization of Dirac's theorem. The Norwegian mathematician
[Øystein Ore](https://mathshistory.st-andrews.ac.uk/Biographies/Ore/) published
the following theorem in a one-page paper in 1960[^ore]:

{% msg "info", true, "Theorem (Ore, 1952)" %}

Let $G = (V, E)$ be a graph with $|V| \geq 3$. If for every pair of non-adjacent vertices $u$ and $v$ with
$\{u, v\} \not \in E$ we have $\deg_G(u) + \deg_G(v) \geq |V|$, then $G$ contains a Hamiltonian cycle.

{% endmsg %}

This observation essentially follows from the proofs presented above. In the previous proofs, we repeatedly
made use of the fact that two disconnected vertices can be connected through two adjacent neighbors. The
condition that $\deg_G(u) + \deg_G(v) \geq |V|$ for two non-adjacent vertices ensures exactly this: The
neighborhoods $\mathcal{N}(u)$ and $\mathcal{N}(v)$ must intersect.

We will prove this by contrapositive:

Assume for sake of contradiction that Ore's theorem is false, i.e. there exists a graph with $|V| \geq 3$
satisfying $\deg_G(u) + \deg_G(v) \geq |V|$ for $\{ x, y \} \not \in E$ that does not contain a Hamiltonian cycle.
Let $G$ be the the one with a maximum number of edges among those. Notice that $G$ must contain a non-edge
$\{x, y\} \not \in E$, as the complete graph $K_{|V|}$ clearly contains a Hamiltonian cycle. Therefore we know
the statement does not just hold vacuously.

Now, adding $\{x, y\}$ to $G$ must necessarily close a Hamiltonian cycle $x = v_1, \dots, v_n = y$ by our choice of $G$.
Here we can however again apply case 3 of the [induction proof](#induction-ii) (with the knowledge that
$|\mathcal{N}(x)| + |\mathcal{N}^+(y)| \geq |V|$) to conclude that $\{x, y\}$ was not
necessary to close the Hamiltonian cycle. There must be an edge $v_i v_{i+1}$ in the path,
where also both $\{x, v_{i+1}\} \in E_G$ and $\{v_i, y\} \in E_G$. We obtain a cycle
$C = x, v_{i+1}, \dots, y, v_i, \dots, x$ in $G$, a contradiction.

## Further reading

- Wikipedia: [Hamiltonian Path](https://en.wikipedia.org/wiki/Hamiltonian_path)
- Wikipedia: [Ore's theorem](https://en.wikipedia.org/wiki/Ore%27s_theorem)
- Dirac's original paper: [https://doi.org/10.1112/plms/s3-2.1.69](https://doi.org/10.1112/plms/s3-2.1.69)

## Overview of notation

- Complete graph $K_n$ on $n$ vertices
- Neighborhood $\mathcal{N}(v)$: set of vertices adjacent to $v$
- Extended neighborhood $\mathcal{N}^+(u)$ over an order of vertices: sucessors of neighbors of $u$  
  $\mathcal{N}^+(u) := \{ v_{i+1} \;\vert\; v_i \in \mathcal{N}(u)\}$
- Minimum degree $\delta(G) := \min_{v \in V} \deg_G(v)$

[^dirac]: Dirac, G.A. (1952), Some Theorems on Abstract Graphs. _Proceedings of the London Mathematical Society_, s3-2: 69-81. https://doi.org/10.1112/plms/s3-2.1.69

[^posa]: Pósa, L. (1976). Hamiltonian circuits in random graphs. _Discrete Mathematics_, 14, 359-364. https://doi.org/10.1016/0012-365X%2876%2990068-6

[^diestel]: Diestel, R. (2017). Graph theory. _Graduate texts in mathematics_. https://doi.org/10.1007/978-3-662-53622-3

[^ore]: Ore, O. (1960). Note on Hamilton Circuits. _The American Mathematical Monthly_, 67(1), 55–55. https://doi.org/10.2307/2308928
