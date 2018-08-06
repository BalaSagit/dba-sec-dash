import React, { Component } from 'react';
import { DialogContainer, NavigationDrawer, FontIcon } from 'react-md';
import '../styles/Drawers.scss';
import Dashboard from './Dashboard.jsx';

class Drawers extends Component {
    constructor() {
        super();
        this.navitems = [{
            key: 'Dashboard',
            primaryText: 'Dashboard',
            leftIcon: <FontIcon>dashboard</FontIcon>,
            active: true,
        }, {
            key: 'Reports',
            primaryText: 'Reports',
            leftIcon: <FontIcon>insert_chart</FontIcon>,            
        }
        ];

        // Update the items so they have an onClick handler to change the current page
        this.navItems = this.navitems.map((item) => {
            if (item.divider) {
                return item;
            }

            return {
                ...item,
                onClick: () => this.setPage(item.key, item.primaryText),
            };
        });

        this.state = {
            renderNode: document.getElementById('navigation-drawer'),
            visible: true,
            key: this.navitems[0].key,
            page: this.navitems[0].primaryText,
        };
    }

    setPage = (key, page) => {
        this.navItems = this.navItems.map((item) => {
            if (item.divider) {
                return item;
            }

            return { ...item, active: item.key === key };
        });

        this.setState({ key, page });
    };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false, renderNode: null });
    };

    handleShow = () => {
        this.setState({ renderNode: document.getElementById('navigation-drawer') });
    };

    render() {
        const { visible, page, renderNode } = this.state;
        return (
            <div>
                {/* <Button raised onClick={this.show}>Open the Demo</Button> */}
                <DialogContainer
                    id="navigation-drawer"
                    aria-label="Navigation Drawer"
                    visible={visible}
                    fullPage
                    focusOnMount={true}
                    onShow={this.handleShow}
                    onHide={this.hide}
                >
                    <NavigationDrawer
                        renderNode={renderNode}
                        navItems={this.navItems}
                        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
                        toolbarTitle="DBA Security Dashboard"
                        contentId="main-content"
                        temporaryIcon={<FontIcon>dehaze</FontIcon>}
                        persistentIcon={<FontIcon>arrow_back</FontIcon>}
                        contentClassName="md-grid"
                    >
                        <section className='body'>
                            <Dashboard/>                                                        
                        </section>
                        
                    </NavigationDrawer>
                </DialogContainer>
            </div>
        );
    }
}

export default Drawers;