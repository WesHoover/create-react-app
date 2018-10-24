import React from 'react';

import './GridDemo.css';

export default function GridDemo() {	

	return (
		<div className="demoPage">    <section>        
        <h2>Basic usage. Just add a class <code>.grid-*</code> (from -1 to -12)</h2>
        <p> A sizing class on every cell is not needed.
        </p>
        <p>A row will always have the specified number of columns</p>
        <div className="grid-1">
            <div className="col">
                <div className="demo"><p>grid-1</p></div>
            </div>
        </div>
        <div className="grid-2">
            <div className="col">
                <div className="demo"><p>grid-2</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-3_xs-1">
            <div className="col">
                <div className="demo"><p>grid-3</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-4_xs-2">
            <div className="col">
                <div className="demo"><p>grid-4</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-5_xs-2">
            <div className="col">
                <div className="demo"><p>grid-5</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-6_sm-3">
            <div className="col">
                <div className="demo"><p>grid-6</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-7_md-3">
            <div className="col">
                <div className="demo"><p>grid-7</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-8_md-4">
            <div className="col">
                <div className="demo"><p>grid-8</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-9_lg-3">
            <div className="col">
                <div className="demo"><p>grid-9</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-10_md-5_sm-2">
            <div className="col">
                <div className="demo"><p>grid-10</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-11_md-5_sm-2">
            <div className="col">
                <div className="demo"><p>grid-11</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <div className="grid-12_lg-8_md-6_sm-4_xs-2">
            <div className="col">
                <div className="demo"><p>grid-12</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
            <div className="col">
                <div className="demo"><p>&nbsp;</p></div>
            </div>
        </div>
        <p>If there are more columns than set in the .grid class they will automatically fallover.  Example - <code>.grid-3</code></p>

        <div className="grid-3_xs-1">
            <div className="col">
                <div className="demo">
                    <p>col 1</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 2</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 3</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 4</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 5</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 6</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 7</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 8</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 9</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col 10</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-3_xs-1">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Cell by cell (with class like <code>.col-*</code>)</h2>

        <div className="grid">
            <div className="col-12">
                <div className="demo">
                    <p>col-12</p>
                </div>
            </div>
            <div className="col-11_md-10_xs-8">
                <div className="demo">
                    <p>col-11</p>
                </div>
            </div>
            <div className="col-1_md-2_xs-4">
                <div className="demo">
                    <p>col-1</p>
                </div>
            </div>
            <div className="col-10_xs-7">
                <div className="demo">
                    <p>col-10</p>
                </div>
            </div>
            <div className="col-2_xs-5">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-9">
                <div className="demo">
                    <p>col-9</p>
                </div>
            </div>
            <div className="col-3">
                <div className="demo">
                    <p>col-3</p>
                </div>
            </div>
            <div className="col-8">
                <div className="demo">
                    <p>col-8</p>
                </div>
            </div>
            <div className="col-4">
                <div className="demo">
                    <p>col-4</p>
                </div>
            </div>
            <div className="col-7">
                <div className="demo">
                    <p>col-7</p>
                </div>
            </div>
            <div className="col-5">
                <div className="demo">
                    <p>col-5</p>
                </div>
            </div>
            <div className="col-6">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
            <div className="col-6">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
            <div className="col-5">
                <div className="demo">
                    <p>col-5</p>
                </div>
            </div>
            <div className="col-7">
                <div className="demo">
                    <p>col-7</p>
                </div>
            </div>
            <div className="col-4">
                <div className="demo">
                    <p>col-4</p>
                </div>
            </div>
            <div className="col-8">
                <div className="demo">
                    <p>col-8</p>
                </div>
            </div>
            <div className="col-3">
                <div className="demo">
                    <p>col-3</p>
                </div>
            </div>
            <div className="col-9">
                <div className="demo">
                    <p>col-9</p>
                </div>
            </div>
            <div className="col-2_xs-5">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-10_xs-7">
                <div className="demo">
                    <p>col-10</p>
                </div>
            </div>
            <div className="col-1_md-2_xs-4">
                <div className="demo">
                    <p>col-1</p>
                </div>
            </div>
            <div className="col-11_md-10_xs-8">
                <div className="demo">
                    <p>col-11</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-12">...&lt;/div> &lt;!-- first row: one column -->
    &lt;div className="col-6">...&lt;/div> &lt;!-- second row: three columns (6+3+3) -->
    &lt;div className="col-3">...&lt;/div>
    &lt;div className="col-3">...&lt;/div>
&lt;/div></code></pre>

        <h2>Automatic. Add number of cells you want in the grid (<code>.grid > .col</code>):</h2>        

        <p>One column</p>
        <div className="grid">
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
        </div>
        <p>Four columns</p>
        <div className="grid">
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
        </div>
        <p>.Nine columns?</p>
        <div className="grid_xs-4">
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
        </div>

        <pre><code>&lt;div className="grid"> &lt;!-- Four &lt;div className="col"> for 4 columns in the grid --&gt;
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Mixed types</h2>
        <div className="grid-6_sm-2">
            <div className="col-8_sm-12">
                <div className="demo">
                    <p>col-8</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col-5_sm-6">
                <div className="demo">
                    <p>col-5</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-1_sm-4">
                <div className="demo">
                    <p>col-1</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-6_sm-2">
    &lt;!-- first row -->
    &lt;div className="col-8_sm-12">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;!-- second row -->
    &lt;div className="col">...&lt;/div>
    &lt;div className="col-5_sm-6">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-1_sm-4">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;!-- third row -->
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <div className="grid">
            <div className="col">
                <div className="demo">
                    <p>auto</p>
                </div>
            </div>
            <div className="col-2_sm-12">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-6_sm-12">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col-2_sm-12">...&lt;/div>
    &lt;div className="col-6_sm-12">...&lt;/div>
&lt;/div></code></pre>
        <h2>No Gutters</h2>
        <div className="grid-noGutter-equalHeight withBorder">
            <div className="col-12">
                <div className="demo">
                    <p>col-12</p>
                </div>
            </div>
            <div className="col-6">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
            <div className="col-6">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
            <div className="col-4">
                <div className="demo">
                    <p>col-4</p>
                </div>
            </div>
            <div className="col-8">
                <div className="demo">
                    <p>col-8</p>
                </div>
            </div>
            <div className="col-3">
                <div className="demo">
                    <p>col-3</p>
                </div>
            </div>
            <div className="col-9">
                <div className="demo">
                    <p>col-9</p>
                </div>
            </div>
            <div className="col-1_xs-2">
                <div className="demo">
                    <p>col-1</p>
                </div>
            </div>
            <div className="col-11_xs-10">
                <div className="demo">
                    <p>col-11</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-noGutter">
    &lt;div className="col-12">...&lt;/div>
    &lt;div className="col-6">...&lt;/div>
    &lt;div className="col-6">...&lt;/div>
    &lt;div className="col-4">...&lt;/div>
    &lt;div className="col-8">...&lt;/div>
    &lt;div className="col-3">...&lt;/div>
    &lt;div className="col-9">...&lt;/div>
    &lt;div className="col-1">...&lt;/div>
    &lt;div className="col-11">...&lt;/div>
&lt;/div></code></pre>

        <h2>Nesting</h2>
        <div className="grid">
            <div className="col-6_sm-12"><p className="demo-explain">.col-6:</p></div>
            <div className="col-6_sm-12"><p className="demo-explain">Each column can be a grid (<code>.col-6.grid</code>)
            </p></div>
            <div className="col-6_sm-12">
                <div className="demo">
                    <p>col-6</p>
                </div>
            </div>
            <div className="col-6_sm-12 grid">
                <div className="col-4">
                    <div className="demo">
                        <p>col-4</p>
                    </div>
                </div>
                <div className="col-8 grid">
                    <div className="col-6">
                        <div className="demo">
                            <p>col-6</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="demo">
                            <p>col-6</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="demo">
                            <p>col-4</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="demo">
                            <p>col-4</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="demo">
                            <p>col-4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-6">
        col-6
    &lt;/div>
    &lt;div className="col-6 grid">
        &lt;div className="col-4">
            col-4
        &lt;/div>
        &lt;div className="col-8 grid">
            &lt;div className="col-6">
                col-6
            &lt;/div>
            &lt;div className="col-6">
                col-6
            &lt;/div>
            &lt;div className="col-4">
                col-4
            &lt;/div>
            &lt;div className="col-4">
                col-4
            &lt;/div>
            &lt;div className="col-4">
                col-4
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div></code></pre>

        <h2 id="complex-grid">Complex grid</h2>

        <div className="grid-2_md-1-equalHeight">
            <div className="col grid-column-equalHeight">
                <div className="col grid-equalHeight">
                    <div className="col grid-column-equalHeight">
                        <div className="col">
                            <div className="demo demo-left">
                                <p><strong>Top box</strong><br />
                                    Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="demo demo-left">
                                <p><strong>Middle box</strong><br />
                                    Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="demo demo-left">
                                <p><strong>Bottom box</strong><br />
                                    Lorem ipsum </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="demo demo-left">
                            <p><strong>Center box</strong><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                                pulvinar felis blandit.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="demo demo-left">
                        <p><strong>Wide box</strong><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                            facilisis. </p></div>
                </div>
            </div>
            <div className="col_md-12_md-first">
                <div className="demo demo-left">
                    <p><strong>Tall box</strong><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                        pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
                        Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut
                        quam.<br /><br />
                        Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
                        Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin
                        felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
                        amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat
                        tortor.<br /><br />
                        Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
                        consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                        ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper
                        leo.</p>
                </div>
            </div>
        </div>
        
        <div className="grid-equalHeight">
            <div className="col-2">
                <div className="demo demo-left">
                    <p><strong>Side box</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                </div>
            </div>
            <div className="col">
                <div className="demo demo-left">
                    <p><strong>Main box</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur atque cum dignissimos dolorem doloribus hic libero non placeat possimus quisquam quod recusandae, repellat reprehenderit sit sunt, voluptatibus. Cum eveniet facere nemo obcaecati quaerat sed!</p>
                </div>
            </div>
        </div>

        <div className="grid-equalHeight_md-1">
            <div className="col-5_md-12_md-first">
                <div className="demo demo-left">
                    <p><strong>Tall box</strong><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                        pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
                        Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut
                        quam.<br /><br />
                        Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
                        Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin
                        felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
                        amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat
                        tortor.
                    </p>
                </div>
            </div>
            <div className="col grid-column-equalHeight">
                <div className="col grid-equalHeight">
                    <div className="col-9">
                        <div className="demo demo-left">
                            <p><strong>Wide box</strong><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                facilisis. </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="demo demo-left">
                            <p><strong>Small box</strong><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col grid-equalHeight">
                    <div className="col grid-column-equalHeight">
                        <div className="col">
                            <div className="demo demo-left">
                                <p><strong>Top box</strong><br />
                                    Lorem ipsum </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="demo demo-left">
                                <p><strong>Bottom box</strong><br />
                                    Lorem ipsum </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="demo demo-left">
                            <p><strong>Center box</strong><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                                pulvinar felis blandit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid-equalHeight">
            <div className="col">
                <div className="demo demo-left">
                    <p><strong>Main box</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio laboriosam porro qui quidem sint.</p>
                </div>
            </div>
            <div className="col-4">
                <div className="demo demo-left">
                    <p><strong>Side box</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores est hic omnis quis unde, voluptatem!</p>
                </div>
            </div>
        </div>
        <div className="grid-equalHeight">
            <div className="col-2">
                <div className="demo demo-left">
                    <p><strong>Left</strong><br />Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="col-7">
                <div className="demo demo-left">
                    <p><strong>Center</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque eum id illo inventore iusto minus nobis qui, totam voluptatibus?</p>
                </div>
            </div>
            <div className="col-3">
                <div className="demo demo-left">
                    <p><strong>Left</strong><br />Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div className="grid-center">
            <div className="col-7">
                <div className="demo">
                    <p><strong>Center</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                </div>
            </div>
        </div>

        <h2>Breakpoints:</h2>
        <div className="grid">
            <div className="col-12 lg-hidden">
                <div className="demo"><p>This column is hidden up to _lg breakpoint</p></div>
            </div>
            <div className="col-12 md-hidden">
                <div className="demo"><p>This column is hidden up to _md breakpoint</p></div>
            </div>
            <div className="col-12 sm-hidden">
                <div className="demo"><p>This column is hidden up to _sm breakpoint</p></div>
            </div>
            <div className="col-12 xs-hidden">
                <div className="demo"><p>This column is hidden up to _xs breakpoint</p></div>
            </div>
        </div>
        <pre><code>&lt;div className="col-12 lg-hidden">&lt;/div>
&lt;div className="col-12 md-hidden">&lt;/div>
&lt;div className="col-12 sm-hidden">&lt;/div>
&lt;div className="col-12 xs-hidden">&lt;/div></code></pre>
    </section>

    <section>
        <h2>Horizontal alignment</h2>
        <div className="grid-3">
            <div className="col">
                <div className="demo">
                    <p>(default)</p>
                </div>
            </div>
        </div>
        <div className="grid-3-center">
            <div className="col">
                <div className="demo">
                    <p>.grid-center</p>
                </div>
            </div>
        </div>
        <div className="grid-3-right">
            <div className="col">
                <div className="demo">
                    <p>.grid-right</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-3">
    &lt;div className="col">...&lt;/div>
&lt;/div>
&lt;div className="grid-3-center">
    &lt;div className="col">...&lt;/div>
&lt;/div>
&lt;div className="grid-3-right">
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Vertical top</h2>
        <div className="grid">
            <div className="col">
                <div className="demo">
                    <p>(default)</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, dolorum eius esse id labore odit
                        placeat tempora! Alias aliquam aut eaque nulla repudiandae, temporibus voluptatum.</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>...</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Vertical middle</h2>
        <div className="grid-middle">
            <div className="col">
                <div className="demo">
                    <p>.grid-middle</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, dolorum eius esse id labore odit
                        placeat tempora! Alias aliquam aut eaque nulla repudiandae, temporibus voluptatum.</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>...</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-middle">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Vertical bottom</h2>
        <div className="grid-bottom">
            <div className="col">
                <div className="demo">
                    <p>.grid-bottom</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, dolorum eius esse id labore odit
                        placeat tempora! Alias aliquam aut eaque nulla repudiandae, temporibus voluptatum.</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>...</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-bottom">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>

        <h2>Vertical alignment on the column: grid-middle and mixed columns</h2>
        <div className="grid-4-middle">
            <div className="col">
                <div className="demo">
                    <p>default (middle)</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto aut, commodi
                        deserunt dicta eligendi error incidunt inventore maiores mollitia officiis placeat quibusdam
                        tempora unde veritatis vero voluptas. Ab consectetur delectus nam. Ab animi aspernatur, deserunt
                        eos et, inventore iure laboriosam laborum minus nam nihil quae tempore tenetur ullam.</p>
                </div>
            </div>
            <div className="col-bottom">
                <div className="demo">
                    <p>col-bottom</p>
                </div>
            </div>
            <div className="col-top">
                <div className="demo">
                    <p>col-top</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-4-middle">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col-bottom">...&lt;/div>
    &lt;div className="col-top">...&lt;/div>
&lt;/div></code></pre>

    </section>

    <section>
        <h2>Order, flows, etc.</h2>

        <h3>Normal flow</h3>
        <div className="grid-5">
            <div className="col">
                <div className="demo">
                    <p>A</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>B</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>C</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>D</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>E</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col">A&lt;/div>
    &lt;div className="col">B&lt;/div>
    &lt;div className="col">C&lt;/div>
    &lt;div className="col">D&lt;/div>
    &lt;div className="col">E&lt;/div>
&lt;/div></code></pre>

        <h3>Reverse flow</h3>
        <div className="grid-5-reverse">
            <div className="col">
                <div className="demo">
                    <p>A</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>B</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>C</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>D</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>E</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-reverse">
    &lt;div className="col">A&lt;/div>
    &lt;div className="col">B&lt;/div>
    &lt;div className="col">C&lt;/div>
    &lt;div className="col">D&lt;/div>
    &lt;div className="col">E&lt;/div>
&lt;/div></code></pre>

        <h3>Normal flow with ordering (first / last)</h3>
        <div className="grid-5">
            <div className="col-last">
                <div className="demo">
                    <p>A (last)</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>B</p>
                </div>
            </div>
            <div className="col_md-first">
                <div className="demo">
                    <p>C (_md-first)</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>D</p>
                </div>
            </div>
            <div className="col-first">
                <div className="demo">
                    <p>E (first)</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-last">A (last)&lt;/div>
    &lt;div className="col">B&lt;/div>
    &lt;div className="col_md-first">C (first only on _md)&lt;/div>
    &lt;div className="col">D&lt;/div>
    &lt;div className="col-first">E (first)&lt;/div>
&lt;/div></code></pre>

        <h3>No gutter equal-height</h3>
        <div className="grid-noGutter-equalHeight withBorder">
            <div className="col">
                <div className="demo">
                    <p>&nbsp;</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam inventore minima facere
                        possimus quisquam.</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>&nbsp;</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-noGutter-equalHeight">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>
        <h3>Header element</h3>
        <div className="grid-noGutter-noBottom">
            <div className="col-3">
                <div className="demo">
                    <p>col-3</p>
                </div>
            </div>
            <div className="col">
                <div className="demo">
                    <p>col-auto</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-noGutter-noBottom">
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
    &lt;div className="col">...&lt;/div>
&lt;/div></code></pre>
    </section>

    <section>
        <h2>Distribution</h2>
        <h3>Horizontal distribution (grid-spaceBetween)</h3>
        <p>If you add <code>spaceBetween</code> class, the distribution will have no margin around first and last
            elements :</p>
        <div className="grid-spaceBetween">
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-spaceBetween">
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
&lt;/div></code></pre>

        <h3>Horizontal distribution (spaceAround)</h3>
        <p>If you add <code>grid-spaceAround</code> class, the distribution will have margins around first and last
            elements :</p>
        <div className="grid-spaceAround">
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-spaceAround">
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
&lt;/div></code></pre>

        <h3>Horizontal distribution (width grid-center)</h3>
        <div className="grid-center">
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid-center">
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
    &lt;div className="col-2">...&lt;/div>
&lt;/div></code></pre>
        <div className="grid-2_md-1">
            <div className="col">
                <h3>Columns</h3>
                <div className="grid-column">
                    <div className="col-4">
                        <div className="demo">
                            <p>A</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="demo">
                            <p>B</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="demo">
                            <p>C</p>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div className="grid-column">
    &lt;div className="col-4">A&lt;/div>
    &lt;div className="col-2">B&lt;/div>
    &lt;div className="col-6">C&lt;/div>
&lt;/div></code></pre>
            </div>
            <div className="col">
                <h3>Columns-reverse</h3>
                <div className="grid-column-reverse">
                    <div className="col-4">
                        <div className="demo">
                            <p>A</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="demo">
                            <p>B</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="demo">
                            <p>C</p>
                        </div>
                    </div>
                </div>
                <pre><code>&lt;div className="grid-column-reverse">
    &lt;div className="col-4">A&lt;/div>
    &lt;div className="col-2">B&lt;/div>
    &lt;div className="col-6">C&lt;/div>
&lt;/div></code></pre>
            </div>
        </div>
    </section>

    <section>
        <h2>Offset: push a col from left or from right</h2>
        <div className="grid">
            <div className="col-6" data-push-left="off-6">
                <div className="demo">
                    <p>col-6 data-push-left="off-6"</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-6" data-push-left="off-6">col-6 data-push-left="off-6"&lt;/div>
&lt;/div></code></pre>
        <div className="grid">
            <div className="col-4">
                <div className="demo">
                    <p>col-4</p>
                </div>
            </div>
            <div className="col-4" data-push-left="off-4">
                <div className="demo">
                    <p>col-4 data-push-left="off-4"</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-4">col-4&lt;/div>
    &lt;div className="col-4" data-push-left="off-4>col-4 data-push-left="off-4"&lt;/div>
&lt;/div></code></pre>
        <div className="grid">
            <div className="col-2_xs-6" data-push-left="off-2_xs-6">
                <div className="demo">
                    <p>col-2 data-push-left-2</p>
                </div>
            </div>
            <div className="col-2_xs-6" data-push-left="off-2_xs-6">
                <div className="demo">
                    <p>col-2 data-push-left="off-2"</p>
                </div>
            </div>
            <div className="col-2_xs-6" data-push-left="off-2_xs-6">
                <div className="demo">
                    <p>col-2 data-push-left="off-2"</p>
                </div>
            </div>
            <div className="col-2" data-push-right="off-2">
                <div className="demo">
                    <p>col-2 data-push-right="off-2"</p>
                </div>
            </div>
            <div className="col-2" data-push-right="off-2">
                <div className="demo">
                    <p>col-2 data-push-right="off-2"</p>
                </div>
            </div>
            <div className="col-2" data-push-right="off-2">
                <div className="demo">
                    <p>col-2 data-push-right="off-2"</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
            <div className="col-6" data-push-left="off-1" data-push-right="off-1">
                <div className="demo">
                    <p>col-6 data-push-left="off-1" data-push-right="off-1"</p>
                </div>
            </div>
            <div className="col-2">
                <div className="demo">
                    <p>col-2</p>
                </div>
            </div>
        </div>
        <pre><code>&lt;div className="grid">
    &lt;div className="col-2" data-push-left="off-2">col-2 data-push-left="off-2"&lt;/div>
    &lt;div className="col-2" data-push-left="off-2">col-2 data-push-left="off-2"&lt;/div>
    &lt;div className="col-2" data-push-left="off-2">col-2 data-push-left="off-2"&lt;/div>

    &lt;div className="col-2" data-push-right="off-2">col-2 data-push-right="off-2"&lt;/div>
    &lt;div className="col-2" data-push-right="off-2">col-2 data-push-right="off-2"&lt;/div>
    &lt;div className="col-2" data-push-right="off-2">col-2 data-push-right="off-2"&lt;/div>

    &lt;div className="col-2"&lt;/div>
    &lt;div className="col-6" data-push-left="off-1" data-push-right="off-1">col-6 data-push-left="1" data-push-right="1"&lt;/div>
    &lt;div className="col-2"&lt;/div>
&lt;/div></code></pre>
    </section>
        <section className="doc">
        <h1 id="documentation">Helpers</h1>
        <h2>Grid &amp; associated classes</h2>
        <pre className="doc"><code>.grid
  -* (1 to 12)
    _xs-* (1 to 12)
    _sm-* (1 to 12)
    _md-* (1 to 12)
    _lg-* (1 to 12)

  -center
  -right
  -middle
  -bottom
  -spaceBetween
  -spaceAround

  -reverse
  -column
  -column-reverse

  -noGutter
  -equalHeight
  -noBottom
  -noWrap</code></pre>

        <h2>Columns &amp; associated classes: </h2>
        <pre className="doc"><code>.col
  -* (1 to 12)
  _xs-* (1 to 12)
  _sm-* (1 to 12)
  _md-* (1 to 12)
  _lg-* (1 to 12)
    e.g. &lt;div className="col-12_lg-8_md-6_sm-3_xs-1">...&lt;/div>

  .col-first (or with key-suffixes _md-first...)
  .col-last (or with key-suffixes _md-last...)</code></pre>

        <h2>Offsets: with data-push-left="" and data-push-right="" attributes</h2>
        <pre className="doc"><code>off-* (0 to 11)
  _xs-* (0 to 11)
  _sm-* (0 to 11)
  _md-* (0 to 11)
  _lg-* (0 to 11)

  -0: reboot the offset (can be usefull in responsive mode with key-suffixes)</code></pre>

        <h2>Media-queries</h2>        
        <h3>Columns can be hidden at breakpoints using <code> *-hidden</code> (e.g. <code>col-4_md-6 sm-hidden</code>)
        </h3>
        <div className="bs-callout">
            <table>
                <thead>
                <tr>
                    <th>CSS Media Query</th>
                    <th>Applies</th>
                    <th>Usage</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><code>@media (max-width: 36em)</code></td>
                    <td>Max 576px</td>
                    <td><code><b>_xs</b>-*</code></td>
                </tr>
                <tr>
                    <td><code>@media (max-width: 48em)</code></td>
                    <td>Max 768px</td>
                    <td><code><b>_sm</b>-*</code></td>
                </tr>
                <tr>
                    <td><code>@media (max-width: 64em)</code></td>
                    <td>Max 1024px</td>
                    <td><code><b>_md</b>-*</code></td>
                </tr>
                <tr>
                    <td><code>@media (max-width: 80em)</code></td>
                    <td>Max 1280px</td>
                    <td><code><b>_lg</b>-*</code></td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
    <section className="doc">
        <h1 id="sass-documentation">Sass variables</h1>        
        <div className="bs-callout">           
            <table>
                <thead>
                <tr>
                    <th>Variable names</th>
                    <th>Default value</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>$gl-colCount:</code></td>
                        <td><code>12</code></td>
                    </tr>
                <tr>
                    <td><code>$gl-gridName:</code></td>
                    <td><code>grid</code></td>
                </tr>
                <tr>
                    <td><code>$gl-colName:</code></td>
                    <td><code>col</code></td>
                </tr>
                <tr>
                    <td><code>$gl-attributeName:</code></td>
                    <td><code>class</code></td>
                </tr>
                <tr>
                    <td><code>$gl-gutter:</code></td>
                    <td><code>1rem</code></td>
                </tr>
                <tr>
                    <td><code>$gl-gutter-vertical:</code></td>
                    <td><code>1rem</code></td>
                </tr>
                <tr>
                    <td><code>$gl-mq-width:</code></td>
                    <td><code>'max-width'</code></td>
                </tr>
                <tr>
                    <td><code>$gl-mq-list:</code></td>
                    <td><pre><code>(
  lg: 80em,
  md: 64em,
  sm: 48em,
  xs: 36em
)</code></pre>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section> 

</div>
	);
}
