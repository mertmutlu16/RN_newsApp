import React from "react";
import { ScrollView ,View,Image} from "react-native";
import styles from './BannerCard.style';
import newsBannerData from '../../newsBannerData.json';



const BannerCard =()=>{

    return(
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {
                newsBannerData.map(bannerNews=> 
                <Image 
                    style={styles.bannerImage}
                    source={{uri:bannerNews.imageUrl}}/>)
                    
               }
            </ScrollView>

    )
}

export default BannerCard;