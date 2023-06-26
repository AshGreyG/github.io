>本文章已完结，如有错误请不吝赐教

<br>

>使用**直角坐标**计算
>$$
    \displaystyle \iint \limits_D (y+\sqrt{x^2+y^2})\mathrm{d}x\mathrm{d}y
$$
>, 其中积分域$D$为$\{(x,y)|x^2+y^2 \leqslant2x \}$

<br>

$\quad$ 首先观察到积分域关于$x$轴对称, 因此$y$的单独一项积分为$0$


$$
    \begin{aligned}
    \iint \limits_D (y+\sqrt{x^2+y^2})\mathrm{d}x\mathrm{d}y
    =\iint \limits_D \sqrt{x^2+y^2}\mathrm{d}x\mathrm{d}y
    =\int_0^2\mathrm{d}x\int_{-\sqrt{2x-x^2}}^{\sqrt{2x-x^2}}\sqrt{x^2+y^2}\mathrm{d}y\equiv I_1
    \end{aligned}   
$$

对积分$I_1$进行计算, 考虑不定积分$\displaystyle \int \sqrt{a^2+x^2}\mathrm{d}x$

$$
    \begin{aligned}
        \int \sqrt{a^2+x^2}\mathrm{d}x\xrightarrow{x=a\sinh{t} }
        a^2\int\cosh^2{t}\mathrm{d}t=\frac{a^2}{2}\int(1+\cosh{2t})\mathrm{d}t
        =\frac{a^2}{2}(t+\frac{1}{2}\sinh{t})+C
    \end{aligned}
$$

根据这个结果求积分$I_1$:

$$
    \begin{aligned}
    I_1=\left(\frac{x^2}{2}\ln{\left[\frac{y}{x}+\sqrt{1+\left(\frac{y}{x}\right)^2}\right] }+\frac{y}{2}\sqrt{x^2+y^2}+C\right)\bigg|_{-\sqrt{2x-x^2}}^{\sqrt{2x-x^2}}
    \end{aligned}
$$


$$
    \begin{aligned}
    =x^2\ln\left(\frac{\sqrt{2x}+\sqrt{2x-x^2}}{x}\right)+\sqrt{4x^2-2x^3}
\end{aligned}
$$

由此得到两部分积分$\displaystyle I_2=\int_0^2x^2\ln\left(\frac{\sqrt{2x}+\sqrt{2x-x^2}}{x}\right)\mathrm{d}x$
与$\displaystyle I_3=\int_0^2\sqrt{4x^2-2x^3}\mathrm{d}x$


先计算较为简单的$I_3$:
$$
    \begin{aligned}
    \int\sqrt{4x^2-2x^3}\mathrm{d}x=\int x \left[-\frac{1}{3}(4-2x)^{\frac{3}{2}}\right]'\mathrm{d}x 
    =-\frac{x}{3}(4-2x)^{\frac{3}{2}}+\frac{1}{3}\int(4-2x)^{\frac{3}{2}}\mathrm{d}x 
    \end{aligned}
$$
$$
    \begin{aligned}
    =-\frac{x}{3}(4-2x)^{\frac{3}{2}}-\frac{1}{15}(4-2x)^{\frac{5}{2}}+C
    \end{aligned}
$$
$$
    \begin{aligned}
    \Longrightarrow I_3=\frac{32}{15}
    \end{aligned}
$$

再计算较为复杂的$I_2$:
$$
    \begin{aligned}
        \int x^2\ln\left(\frac{\sqrt{2x}+\sqrt{2x-x^2}}{x}\right)\mathrm{d}x
        =\int x^2\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)\mathrm{d}x-\int x^2\ln{x}\mathrm{d}x
    \end{aligned}
$$

由此得到两部分积分$\displaystyle I_4=\int x^2\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)\mathrm{d}x$与$\displaystyle I_5=\int x^2\ln{x}\mathrm{d}x$

先计算较为简单的$I_5$:
$$
    \begin{aligned}
    \int x^2\ln{x}\mathrm{d}x=\frac{1}{3}x^3\ln{x}-\frac{1}{9}x^3+C_1
    \end{aligned}
$$

再计算较为复杂的$I_4$:
$$
    \begin{aligned}
    \int x^2\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)\mathrm{d}x
    =\int \left(\frac{1}{3}x^3\right)'\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)\mathrm{d}x
    \end{aligned}
$$
$$
    \begin{aligned}
    =\frac{1}{3}x^3\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)-\frac{1}{3}\int\frac{x^3}{\sqrt{2x}+\sqrt{2x-x^2}}\left(\frac{1}{\sqrt{2x}}+\frac{1-x}{\sqrt{2x-x^2}}\right)\mathrm{d}x
    \end{aligned}
$$

这里分式的化简较为复杂, 总体思路是分母有理化
$$
    \begin{aligned}
    =\frac{1}{3}x^3\ln\left(\sqrt{2x}+\sqrt{2x-x^2}\right)-\frac{1}{3}\int\left(x^2-\frac{x^2}{\sqrt{4-2x}}\right)\mathrm{d}x
    =M-\frac{1}{9}x^3+\frac{1}{3}\int\frac{x^2}{\sqrt{4-2x}}\mathrm{d}x
    \end{aligned}
$$
接下去就只剩最后一个积分了:
$$
    \begin{aligned}
    \int\frac{x^2}{\sqrt{4-2x}}\mathrm{d}x=\int x^2\mathrm{d}\left(-\sqrt{4-2x}\right)
    \xrightarrow{t=-\sqrt{4-2x}}\frac{1}{4}\int(4-t^2)^2\mathrm{d}t
    \end{aligned}
$$

$$
    \begin{aligned}
    =\frac{1}{4}\left(\frac{1}{5}t^5-\frac{8}{3}t^3+16t\right)+C_2
    =\frac{1}{4}\left(-\frac{1}{5}(4-2x)^{\frac{5}{2}}+\frac{8}{3}(4-2x)^{\frac{3}{2}}-16\sqrt{4-2x}\right)+C_2
    \end{aligned}
$$

综上所述可得:
$$
    \begin{aligned}
    \int x^2\ln\left(\frac{\sqrt{2x}+\sqrt{2x-x^2}}{x}\right)\mathrm{d}x
    \end{aligned}
$$

$$
    \begin{aligned}
    =\frac{1}{3}x^3\ln\left(\frac{\sqrt{2x}+\sqrt{2x-x^2}}{x}\right)-\frac{1}{60}(4-2x)^{\frac{5}{2}}+\frac{2}{9}(4-2x)^{\frac{3}{2}}-\frac{4}{3}\sqrt{4-2x}+C
\end{aligned}
$$
$$
    \begin{aligned}
    \Longrightarrow I_2=\frac{64}{45}
    \end{aligned}
$$

**The Final Answer is**
$$
    \begin{aligned}
    I_2+I_3=\frac{32}{9}
    \end{aligned}
$$

